import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from "./routes/prouct.routes.js"

dotenv.config({
    path: './.env'
});

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/products', productRoutes)

export default app;