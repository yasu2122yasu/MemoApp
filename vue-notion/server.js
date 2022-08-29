const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function (req, res) {
  res.send(__dirname + "/dist/index.html");
});

app.listen(port, function () {
  console.log('Example app listening');
});

/*
const port = process.env.PORT || 3338;
// ...
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

*/