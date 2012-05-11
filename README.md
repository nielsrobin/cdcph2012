# cdcph2012

This is the slides and code examples from a talk on node I did at Community Day 2012 (communityday.dk).

During the talk I reviewed some code for building the CRUD functions of a basic Restful API using express and mongoose, as well as a realtime chat client using node and socket.io.

There is also a .net mvc 4 example of the realtime chat client in SignalR.

## Clients

Contains the client-side code for the node examples.
* index.html is a client talks to the Restful API (/Servers/06.mongodb.js must be running on node).
* chat.html and chat2.html display a realtime chat client, one using json and one using bison.

## Servers

Contains the server-side code for the node examples. To be able to run these you have to install node and run "npm install" in the Servers-folder, this should automatically install express, mongoose, underscore, socket.io and bison. If this fails you can install them manually by typing them in one at a time like this: npm install express.

* 01.nodejs.js is a basic hello world example.
* 02.nodejs.js shows the basics in routing in node.
* 03.expressjs.js is a basic hello world example using express.
* 04.expressjs.js shows how you could handle something like multiple formats (xml/json).
* 05.expressjs.js shows a full non-persistant restful api with all CRUD functionality.
* 06.expressjs.js expands on example 05 by adding the persistant db-layer using mongoose and mongodb (you need to have mongodb installed and running) (index.html).
* 07.socket.io.js is the node server for the realtime chat client (chat2.html).
* 08.socket.io.js is the node server for the realtime chat client supporting bison (chat2.html).

## linqpad

LinqPad4 examples for using the Restful API.

## SignalRChat

.net mvc 4 Realtime Chat Client using SignalR

## License

I don't care. If it helps you great! Enjoy! if not, delete it again :). If you use it you're always welcome to reference me, but this is not required. 

Note to self. Read up on licensing and just pick one for future projects.