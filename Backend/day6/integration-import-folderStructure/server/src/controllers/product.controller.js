import Product from "../models/product.model.js";

//createProduct controller
export const createProduct = async (req, res) => {
    const {
        name,
        description,
        price,
        category,
        brand,
        stock,
        images,
        user
    } = req.body;
    try {
        if (!name || !description || !price || !category || !brand || !images) {
            return res.status(400).json({ message: "Please enter all required fields" });
        }
        const product = await Product.create({
            name,
            description,
            price,
            category,
            brand,
            stock,
            images,
        });

        res.status(201).json({
            success: true,
            product
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//getAllProducts controller
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//deleteProduct controller
export const deleteProduct = async (req, res) => {
    try {
        // URL se ID li aur delete kiya
        const product = await Product.findByIdAndDelete(req.params.id);

        // Agar product nahi mila
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product nahi mila"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product delete ho gaya hai"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};