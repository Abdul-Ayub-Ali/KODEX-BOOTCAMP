const express = require('express');
const { createItemController, getAllItemsController, updateItemController, deleteItemController } = require('../controllers/list.controller');
const route = express.Router();
route.post('/tasks', createItemController);
route.get('/tasks', getAllItemsController);
route.put('/updateItem/:id', updateItemController);
route.delete('/deleteItem/:id', deleteItemController);
module.exports = route;