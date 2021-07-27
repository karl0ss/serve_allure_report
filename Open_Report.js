ServeMe = require("serve-me");
const open = require('open');

var serveMe = ServeMe({
    debug: true,
    log: true,
    directory: "./",
    error: {
        404: "404.html",
        500: "500.html"
    },
});

//Start the server
serveMe.start(8085);

open('http://localhost:8085');
