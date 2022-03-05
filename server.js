// server.js
// app entry

const app = require('./index');

const PORT = 4000;

app.listen(PORT, () => {
  console.log('app listening on port 4000');
});

module.exports = app;
