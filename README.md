# platzi-badges
Single Page Application made to create, list, edit and delete cards for a conference.

This SPA brings some styles from bootstrap style sheet. I also made use of Sass CSS preprocesor to include some additional styles or overwrite some bootstrap's styles.

This application was built using webpack. I included in this repository a webpack config file for each build I prepared. You will find 3 builds: a development build, a dll build and a production build.

I implemented React Router for navigation.

This web application also includes some API calls with the http methods GET, POST, PUT and DELETE to create, list read, edit and delete elements from a data base. In this case conference badge information. 

**Note 1**: As I don't have enough resources to buy web hosting services and set up a static server, I prepared a non editable JSON server using github. This SPA will make all API calls, but the server will not take effect from POST, PUT and DELETE methods.

**Note 2**: I have made a secondary repository where I built this web application using create-react-app. Currently CRA is the only way I know to build a production version that can be deployed at gh-pages with almost any issue, in a fast way and with no cost.

See it live: https://dhguissepe.github.io/platzi-badges-CRA
