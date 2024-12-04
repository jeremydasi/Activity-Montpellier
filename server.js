const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routeActivity = require("./routes/routeActivity");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB", err));

app.use('/activities', routeActivity);

app.get("/", (req, res) => {
  res.send("Bienvenue sur le site de recherche d'activité");
});

app.listen(PORT, () => {
  console.log(`Serveur connecté sur le port http://localhost:${PORT}`);
});
