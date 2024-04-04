import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

import productRoutes from "./routes/product.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import userRoutes from "./routes/user.routes.js";
import authUser from "./routes/auth.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
  });
});
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth/login", authUser);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
