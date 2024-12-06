import express from "express";
import mongoose from "mongoose";
import routeActivity from "./routes/routeActivity.js"; 
import dotenv from "dotenv";
import cors from "cors";
import searchBarRouter from "./routes/searchBarRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Connexion à MongoDB échouée :", error));

app.use('/activities', routeActivity);
app.use('/search', searchBarRouter)

export default app;
