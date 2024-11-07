const express = require('express');
const { createCampaign, getCampaignStatus, sendMessages } = require('../controllers/campaignController');
const router = express.Router();

router.post('/create', createCampaign);
router.get('/status/:id', getCampaignStatus);
router.post('/send/:id', sendMessages);

module.exports = router;