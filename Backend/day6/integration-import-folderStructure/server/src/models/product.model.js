import mongoose from 'mongoose';


//created productSchema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
         required: [true, "Product ka naam zaroori hai"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description dena zaroori hai"]
    },
    price: {
        type: Number,
        required: [true, "Price batana zaroori hai"],
        maxLength: [8, "Price itna zyada nahi ho sakta"]
    },
    images: [
        {
            public_id: { type: String, required: true },
            url: { type: String, required: true }
        }
    ],
    category: {
        type: String,
        required: [true, "Category chunna zaroori hai"]
    },
    brand: {
        type: String,
        required: [true, "Brand ka naam likhein"]
    },
    stock: {
        type: Number,
        required: [true, "Stock quantity batayein"],
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


//created productModel
export default mongoose.model("Product", productSchema);