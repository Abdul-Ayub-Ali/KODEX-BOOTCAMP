const Item = require("../models/list.model");

const createItemController = async (req, res) => {
    try {
        const { task, description, priority, dueDate, category, completed } = req.body;
        
        if (!task) {
            return res.status(400).json({ message: "Task ka naam likhna zaroori hai!" });
        }

        const newItem = await Item.create({
            task,
            description,
            priority,
            dueDate,
            category,
            completed: completed ?? false,
        });

        return res.status(201).json({ 
            success: true, 
            message: "New task created", 
            data: newItem 
        });
    } catch (error) {
        return res.status(500).json({ message: "Error creating task", error: error.message });
    }
};

const getAllItemsController = async (req, res) => {
    try {
        // Sorting by newest first
        const items = await Item.find().sort({ createdAt: -1 }); 
        return res.status(200).json({ 
            success: true,
            count: items.length, 
            data: items 
        });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
};

const updateItemController = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, description, priority, dueDate, category, completed } = req.body;

        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { task, description, priority, dueDate, category, completed },
            { new: true, runValidators: true } // runValidators ensures enum values are checked
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Task nahi mila!" });
        }

        return res.status(200).json({ 
            success: true, 
            message: "Task updated", 
            data: updatedItem 
        });
    } catch (error) {
        return res.status(500).json({ message: "Error updating task", error: error.message });
    }
};

// 4. DELETE - Standard delete
const deleteItemController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Task already deleted or not found" });
        }

        return res.status(200).json({ 
            success: true, 
            message: "Task deleted successfully" 
        });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting task", error: error.message });
    }
};

module.exports = {
    createItemController,
    getAllItemsController,
    updateItemController,
    deleteItemController
};