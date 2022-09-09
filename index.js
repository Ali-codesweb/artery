const express = require("express");
const mongoose = require("mongoose");
const { customerRoutes } = require("./routes/customerRoutes");
const app = express();
require("dotenv").config();

console.log(process.env.NAME)
app.use(express.json());
app.use("/customer", customerRoutes);
mongoose.connect(process.env.URL, (db) => {
  console.log("Connected to DB " + db);
});
app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.PORT}`)
);
