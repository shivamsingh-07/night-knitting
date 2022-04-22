# Night Knitting

Night Knitting is an online event that will run for 48 hours during the college fest, [Zealicon](http://zealicon.in). It is a puzzle game that would require problem-solving skills and an understanding of front-end web technologies. Users will progress through the levels by analyzing hints and the HTML code.

## Steps to setup on Linux/MacOS:

-   Run `yarn` to install all the dependencies.
-   Run `cp env.template .env` and insert the required values.
-   Run `yarn dev` to start the server.

## Steps to setup using docker:

-   Run `cp env.template .env` and insert the required values.
-   Run `docker build -t night-knitting .`
-   Run `docker run -d -p 5000:5000 night-knitting`
