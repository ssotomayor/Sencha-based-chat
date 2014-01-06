Sencha-based-chat
=================

## About

This is a development repo with Sencha Touch 2.3.1 framework based chat app. The server runs on NodeJS.
If you want to make a production build, you will need Sencha CMD in order to do so.

## Server config

It uses http://localhost for the app and http://localhost:8080 as a socket port.
This is hardcoded here:

	index.html
	app/view/Login.js
	nodejs-server/server.js


## Running it

    Run the server at nodejs-server

    $ node server.js

    Put the app on a local server you may be using (Apache, nginx, etc..)
    Enter the app through the browser (Chrome, Safari, Sencha does not work with Firefox).


