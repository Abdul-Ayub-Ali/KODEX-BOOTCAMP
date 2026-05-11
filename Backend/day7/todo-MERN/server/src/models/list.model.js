const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Task ka naam likhna zaroori hai!"],
        trim: true,
        maxlength: [100, "Task ka naam 100 characters se zyada nahi ho sakta"]
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },
    dueDate: {
        type: Date
    },
    category: {
        type: String,
        enum: ["Work", "Personal", "Shopping", "Health", "Others"],
        default: "Personal"
    },
    completed: {
        type: Boolean,
        default: false
    },
    // Useful for multi-user apps
    createdAt: {
        type: Date,
        default: Date.now
    },
});
const Item = mongoose.model('Item', listSchema);
module.exports = Item;