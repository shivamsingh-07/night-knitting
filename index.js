if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const device = require("express-device");
const helmet = require("helmet");
const { ensureAuth, ensureGuest } = require("./middleware/auth");

require("./utils/passport")(passport);
require("./utils/database");

const app = express();

app.set("view engine", "ejs");
app.set("trust proxy", "1");

// Middlewares
app.use(morgan(process.env.NODE_ENV === "production" ? "short" : "dev"));
app.use(
    helmet({
        crossOriginEmbedderPolicy: false,
        contentSecurityPolicy: {
            directives: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                "img-src": ["'self'", "*"]
            }
        }
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    device.capture({
        emptyUserAgentDeviceType: "phone"
    }),
    (req, res, next) => {
        if (req.device.type != "desktop") return res.send(req.device.type + " is not allowed.");
        next();
    }
);
app.use(
    session({
        name: "session",
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            signed: true,
            secure: process.env.NODE_ENV === "production"
        },
        store: MongoStore.create({
            dbName: "sessions",
            mongoUrl: process.env.MONGO_URI
        })
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", ensureGuest, (req, res) => res.render("index"));
app.use("/auth", require("./routes/auth"));
app.use("/level", ensureAuth, require("./routes/level"));
app.get("/dashboard", ensureAuth, (req, res) => res.render("dashboard", { user: req.user }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening on port", PORT));