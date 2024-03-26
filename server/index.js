import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from "./routes/product.routes.js"
import categoriesRoutes from "./routes/categories.routes.js"


dotenv.config({
    path: './.env'
});

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/categories', categoriesRoutes)

export default app;