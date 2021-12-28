const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mobileData = require("./ProductsData/MobilesData");
const booksData = require("./ProductsData/BooksData");
const electronicsData = require("./ProductsData/ElectronicsData");
const mongoose = require("mongoose");
const cors = require("cors");
const ObjectId = require("mongoose").Types.ObjectId;

dotenv.config();
//connecting the mongoose

mongoose.connect(process.env.DATABASE, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Database connected");
});

//connecting the mongooseEcomm

// mongo db experimentation

const { MongoClient } = require("mongodb");
const url = process.env.DATABASE;
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

// schemaa for users data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

//schema for user's addresses data

const addressSchema = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  addressArray: [{ id: Number, address: String }],
});

const Addresses = mongoose.model("Addresses", addressSchema);

//register users endpoint

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  if (user) {
    res.status(500);
    res.json({
      message: "User already exists",
    });
    return;
  }
  await User.create({ name, email, password });
  res.json({
    message: "success",
  });
});
getData();

//login users endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "Invalid Login",
    });
    return;
  }

  res.json({
    name: user.name,
    message: "success",
  });
});

//user address data receive endpoint
app.post("/useraddresses", async (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [email, password] = token.split(":");
  const addresses = req.body;
  // console.log(addresses);
  const user = await User.findOne({ email }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "Invalid access ",
    });
    return;
  }

  const data = await Addresses.findOne({ userId: user._id }).exec();
  // console.log(data);
  if (!data) {
    await Addresses.create({
      userId: user._id,
      addressArray: addresses,
    });
  } else {
    data.addressArray = await addresses;
    await data.save();
  }
  // console.log(data);
  res.json(data);
});

//get request for fetching the addressess
app.get("/useraddress", async (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [email, password] = token.split(":");
  const user = await User.findOne({ email }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "Invalid access",
    });
    return;
  }

  const { addressArray } = await Addresses.findOne({ userId: user._id }).exec();

  res.json(addressArray);
});

// mongo db experimentation

const allProducts = [...booksData, ...electronicsData, ...mobileData];

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API FOR PRODUCTS");
});

app.get("/api/products", (req, res) => {
  res.json(allProducts);
});

app.listen(PORT, () => {
  console.log(`running at ${PORT}!`);
});
