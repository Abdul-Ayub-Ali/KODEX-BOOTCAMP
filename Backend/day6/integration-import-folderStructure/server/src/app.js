//learned and implemented import in backend app.js
import express from 'express';
import productRouter from './routers/product.routes.js'; // 1. Router import karein

const app = express();

app.use(express.json());

// 2. Router ko mount karein
app.use('/api/v1/products', productRouter); 

// 3. Ek simple test route (Optional)
app.get("/", (req, res) => {
    res.send("Server is working!");
});

export default app;