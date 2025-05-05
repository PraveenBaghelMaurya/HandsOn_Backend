const express = require('express');
const Task = require('../model/user.model');
const router = express.Router();

router.post('/todos', async (req, res) => {
    const { task } = req.body;

    try {
        let newTask = new Task({ task });
        await newTask.save();

        res.status(200).json({
            message: "Task inserted successfully"
        })
    } catch (err) {
        res.status(503).json({
            message: 'Not able to store task currently',
            err: err.message
        })
    }
})

router.get('/todos', async (req, res) => {
    try {
        let data = await Task.find({})
        res.json({
            message: 'Tasks fetched successfully',
            "tasks": data
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

// Add these missing routes that your frontend is using:
router.put('/todos', async (req, res) => {
    const { id } = req.body;
    try {
        const task = await Task.findById(id);
        const updatedTask = await Task.findByIdAndUpdate(id, { status: !task.status }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/todos', async (req, res) => {
    const { id } = req.body;
    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/clear-completed', async (req, res) => {
    try {
        await Task.deleteMany({ status: true });
        res.json({ message: 'Completed tasks cleared successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;