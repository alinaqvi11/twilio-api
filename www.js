const express = require("express");
const app = express();
require("dotenv").config();
const twilioRoutes = require("./Http/twilioRoutes");
app.use(express.json())
app.use("/api/v1", twilioRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
