import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) =>
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
