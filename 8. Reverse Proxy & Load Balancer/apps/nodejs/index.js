const express = require('express');
const os = require('os');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.type('application/json');
    res.jsonp({
        date: new Date(),
        hostName: os.hostname() || "Can't get actual hostname",
        appName:  process.env.AppName || "ExpressJs Example App",
        httpMethod: req.method || "Can't get HTTP Verb",
        endpoint: req.path || "Can't get request path.",
        queryParams: [req.query || "No Query params"]
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
