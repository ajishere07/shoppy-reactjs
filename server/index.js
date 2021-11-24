const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mobileData = require("./ProductsData/MobilesData");
const booksData = require("./ProductsData/BooksData");
const electronicsData = require("./ProductsData/ElectronicsData");
const mongoose = require("mongoose");

//connecting the mongoose

mongoose.connect("mongodb://localhost:27017/Ecomm");

//connecting the mongoose

dotenv.config();
// mongo db experimentation

const { MongoClient } = require("mongodb");
const url = process.env.url;
const client = new MongoClient(url);
const database = "Ecomm";

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collectionBooks = db.collection("BooksData");
  let collectionElectronics = db.collection("ElectronicsData");
  let collectionMobiles = db.collection("MobilesData");
  let responseBooks = await collectionBooks.find({}).toArray();
  let responseElectronics = await collectionElectronics.find({}).toArray();
  let responseMobiles = await collectionMobiles.find({}).toArray();
  app.get("/api/mobiles", (req, res) => {
    res.json(responseMobiles);
  });
  app.get("/api/books", (req, res) => {
    res.json(responseBooks);
  });
  app.get("/api/electronics", (req, res) => {
    res.json(responseElectronics);
  });
}

getData();

// mongo db experimentation

const allProducts = [...booksData, ...electronicsData, ...mobileData];

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API FOR PRODUCTS");
});

app.get("/api/products", (req, res) => {
  res.json(allProducts);
});

app.listen(PORT, console.log("this is a server"));
