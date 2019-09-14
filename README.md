# platzi-badges
Single Page Application made to create, list, edit and delete cards for a conference.

I developed client-side and server-side of this project. I made use of Heroku to deploy a complete Node.js application that will serve this SPA and will respond to all the API calls used (GET, POST, PUT and DELETE) with a RESTful API I programmed at server-side.

Database is stored at a mLab sandbox cluster which works using MongoDB. I implemented mongoose library to connect my node.js application to its database and develop all CRUD operations.

This SPA brings some styles from bootstrap style sheet. I also made use of Sass CSS preprocesor to include some additional styles or overwrite some bootstrap's styles.

This application was built using webpack. I included in this repository a webpack config file for each build I prepared. You will find 3 builds: a development build, a dll build and a production build.

Navigation is handled by client-side using React Router. Server-side will serve index.html everytime a request different to '/' is made, in order to prevent issues while refreshing a page or similar actions.

See it live: https://dh-platzi-badges.herokuapp.com
