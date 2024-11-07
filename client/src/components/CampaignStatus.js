import React, { useState, useEffect } from 'react';
import { getCampaignStatus, sendMessages } from '../services/campaignService';

const CampaignStatus = ({ campaignId }) => {
    const [status, setStatus] = useState({ sent: 0, pending: 0 });

    const fetchStatus = async () => {
        try {
            const response = await getCampaignStatus(campaignId);
            setStatus(response.data);
        } catch (error) {
            console.error("Error fetching campaign status", error);
        }
    };

    const handleSendMessages = async () => {
        try {
            await sendMessages(campaignId);
            fetchStatus(); // Refresh status after sending messages
        } catch (error) {
            console.error("Error sending messages", error);
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <div>
            <h2>Campaign Status</h2>
            <p>Messages Sent: {status.sent}</p>
            <p>Messages Pending: {status.pending}</p>
            <button onClick={handleSendMessages}>Send Messages</button>
        </div>
    );
};

export default CampaignStatus;
