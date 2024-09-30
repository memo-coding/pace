require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const VideoModel = require("./models/VideoModel");
const BrochureModel = require("./models/BrochureModel");
const PodcastsModel = require("./models/PodcastsModel");
const DocsModel = require("./models/DocsModel");
const NewsModel = require("./models/NewsModel");
const MapsModel = require("./models/MapsModel");
const ImagesModel = require("./models/ImagesModel");

const app = express();
const PORT = process.env.PORT || 6000;
const MONGO_URL = process.env.MONGO_URL;
express.json();

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "success", message: "hello from server" });
});

// Videos
app.get("/api/v1/videos", async (req, res) => {
  const videos = await VideoModel.find({}).select("-_id");
  try {
    return res
      .status(200)
      .json({ status: "success", message: "hello from videos", data: videos });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/videos/:id", async (req, res) => {
  const { id } = req.params;
  const video = await VideoModel.find({ id }).select("-_id");
  try {
    return res
      .status(200)
      .json({ status: "success", message: "hello from videos", data: video });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// Brochures
app.get("/api/v1/brochures", async (req, res) => {
  const brochures = await BrochureModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from brochures",
      data: brochures,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/brochures/:id", async (req, res) => {
  const { id } = req.params;
  const brochure = await BrochureModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from brochures",
      data: brochure,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// Podcasts
app.get("/api/v1/podcasts", async (req, res) => {
  const podcasts = await PodcastsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from podcasts",
      data: podcasts,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/podcasts/:id", async (req, res) => {
  const { id } = req.params;
  const podcast = await PodcastsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from podcasts",
      data: podcast,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// Docs
app.get("/api/v1/docs", async (req, res) => {
  const docs = await DocsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from docs",
      data: docs,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/docs/:id", async (req, res) => {
  const { id } = req.params;
  const doc = await DocsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from docs",
      data: doc,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// News
app.get("/api/v1/news", async (req, res) => {
  const news = await NewsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from news",
      data: news,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/news/:id", async (req, res) => {
  const { id } = req.params;
  const news = await NewsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from news",
      data: news,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// Story Maps
app.get("/api/v1/maps", async (req, res) => {
  const maps = await MapsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from maps",
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/maps/:id", async (req, res) => {
  const { id } = req.params;
  const maps = await MapsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from maps",
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// Images
app.get("/api/v1/images", async (req, res) => {
  const images = await ImagesModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from images",
      data: images,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/v1/images/:id", async (req, res) => {
  const { id } = req.params;
  const images = await ImagesModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from images",
      data: images,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
