const Product = require('../model/productModel');

// 1. Create Product
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ 
            success: true, 
            message: "Product created successfully",
            data: product 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: "Validation Error: " + error.message 
        });
    }
};

// 2. Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ 
            success: true, 
            count: products.length,
            data: products 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Server Error: " + error.message 
        });
    }
};

// 3. Get Single Product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found" 
            });
        }

        res.status(200).json({ 
            success: true, 
            data: product 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: "Invalid ID format" 
        });
    }
};

// 4. Update Product by ID
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found" 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: "Product updated successfully",
            data: product 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// 5. Delete Product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found" 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: "Product deleted successfully" 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: "Error deleting product: " + error.message 
        });
    }
};