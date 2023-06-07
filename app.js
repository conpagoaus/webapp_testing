const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World from staging");
})

app.get('/test', (req, res) => {
    res.send('Test Route!');
})

// log all requests headers and url to console
app.use((req, res, next) => {
    console.log(new Date().toUTCString());
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    next();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
