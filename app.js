const express = require("express");
const db = require("./db");
const { connectToDb, getDb } = require("./db");

const app = express();

connectToDb((err) => {
  if (!err) {
    // LISTENING ON PORT 5000
    app.listen(8000, () => {
      console.log("Server Started on port 8000");
    });
    db = getDb();
  }
});

//routes
app.get("/projects", (req, res) => {
  let projects = [];

  db.collection("shill_db")
    .find()
    .sort({ slug: 1 })
    .forEach((p) => projects.push(p))
    .then(() => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ error: "Couldn't fetch mongo " });
    });

  res.json({ msg: "Welcome to The API" });
});
