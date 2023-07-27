const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
const mongoURL = "mongodb://127.0.0.1:27017";

const database = mongoose.model(
  "game",
  new mongoose.Schema({
    url: String,
    data: Object,
    updatedAt: { type: Date, default: Date.now },
  }),
);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const fetchData = async (url) => {
  const cache = await database.findOne({ url }).exec();

  if (cache && Date.now() - cache.updatedAt.getTime() < 15000) {
    return cache.data;
  }

  const response = await axios.get(url);
  const { data } = response;

  await database
    .findOneAndUpdate(
      { url },
      { data, updatedAt: Date.now() },
      { upsert: true },
    )
    .exec();

  return data;
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/nba", async (req, res) => {
  try {
    const data = await fetchData(
      "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json",
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching NBA data" });
  }
});

app.get("/mlb", async (req, res) => {
  try {
    const data = await fetchData(
      "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json",
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching MLB data" });
  }
});

// Start the server
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
