const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
    try {
        const { name, message, contacts } = req.body;
        const campaign = new Campaign({ name, message, contacts, pendingCount: contacts.length });
        await campaign.save();
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ error: "Error creating campaign" });
    }
};

exports.getCampaignStatus = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        res.status(200).json({ sent: campaign.sentCount, pending: campaign.pendingCount });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving campaign status" });
    }
};

exports.sendMessages = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        const contacts = campaign.contacts;
        const sentMessages = contacts.slice(0, 5);  
        campaign.sentCount += sentMessages.length;
        campaign.pendingCount -= sentMessages.length;
        await campaign.save();

        res.status(200).json({ sentMessages, status: "Messages sent" });
    } catch (error) {
        res.status(500).json({ error: "Error sending messages" });
    }
};
