const express = require("express");
const path = require('path')
// const connectDB = require("./config/db");
const useMiddleware = require("./middleware/useMiddleware");
const delegateRoutesFor = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

useMiddleware(app);
delegateRoutesFor(app);



app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`ready at http://localhost:${PORT}`);
});

module.exports = app;
