const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: String,
    message: String,
    contacts: [String],
    sentCount: { type: Number, default: 0 },
    pendingCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Campaign', campaignSchema);