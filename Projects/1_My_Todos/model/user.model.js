const mongoose = require('mongoose');

// 1. Create a Schema
const todoSchema = new mongoose.Schema({
    task: String,
    status: { type: Boolean, default: false }
});

// 2. Create a model (Collection)
const Tasks = mongoose.model('Tasks', todoSchema);
module.exports = Tasks;