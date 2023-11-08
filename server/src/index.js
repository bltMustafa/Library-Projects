const express = require("express");
const apicache = require("apicache");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 2080;

app.use(cors());

const v1BookRouter = require("./v1/routes/bookRoutes");

app.get("/api/v1/favoriteBooks", (req, res) => {
  try {
    const DB = require("./database/db.json");
    const formattedJson = JSON.stringify(DB, null, 2);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(formattedJson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "JSON data could not be retrieved or parsed." });
  }
});

const cache = apicache.middleware;

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/favoriteBooks", v1BookRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
