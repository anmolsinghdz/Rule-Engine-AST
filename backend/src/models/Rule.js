const mongoose = require('mongoose');

// Define the schema for a rule
const ruleSchema = new mongoose.Schema({
    ruleString: {
        type: String,
        required: true,
    },
    ast: {
        type: Object, // Can change to better structure if needed
        required: true,
    },
});

// Create the model
const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule; // Export the model
