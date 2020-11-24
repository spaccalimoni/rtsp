const express = require("express");
const app = express();

const { proxy } = require('rtsp-relay')(app);

const handler = proxy({
  url: `rtsp://82.188.122.210:7447/OluifM93AT7FMb7I`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});

// the endpoint our RTSP uses
app.ws('/api/stream', handler);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
