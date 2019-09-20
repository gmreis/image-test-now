const port = process.env.PORT || 3000

var express = require("express");
var app = express();
app.use(express.json());

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

app.get("/get", (req, res, next) => {
    res.json({
        "version": process.env.VERSION
    });
});

app.post('/post', function(request, response) {
    response.send(request.body);
});

app.get(/\/images\/\d+.png/, (req, res) => {
    if (/\d+[05]\.png$/.test(req.originalUrl)) {
        res.status(404).end();
    } else {
        res.status(200).send('You got a 200!');
    }
});
