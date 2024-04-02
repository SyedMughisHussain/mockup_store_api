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


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});
app.get("/api/v1/hello", (req, res) => {
    res.json({
      message: "Hello World!",
      data: [
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "admin",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        },
        {
            name: "<NAME>",
            email: "<EMAIL>",
            password: "<PASSWORD>",
            role: "customer",
            address: "123 Main St, San Francisco, CA 94103, USA"
        }
      ]
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
