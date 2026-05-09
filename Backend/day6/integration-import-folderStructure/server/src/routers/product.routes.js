import express from 'express';
import { createProduct, getAllProducts, deleteProduct } from '../controllers/product.controller.js';

//created  router from express.router
const router = express.Router();


//post router 
router.post('/user', createProduct)

//get router 
router.get('/profile', getAllProducts);

//delete router 
router.delete('/:id', deleteProduct);

export default router;