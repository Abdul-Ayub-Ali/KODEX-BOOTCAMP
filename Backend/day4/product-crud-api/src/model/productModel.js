const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Product", productSchema);