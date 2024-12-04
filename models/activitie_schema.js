const mongoose = require('mongoose');

const activitiSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},

})