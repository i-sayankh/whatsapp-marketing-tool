import React, { useState } from 'react';
import { createCampaign } from '../services/campaignService';

const CampaignForm = ({ onCampaignCreated }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [contacts, setContacts] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactsArray = contacts.split('\n').filter(contact => contact.trim() !== '');
        const campaignData = { name, message, contacts: contactsArray };

        try {
            const response = await createCampaign(campaignData);
            onCampaignCreated(response.data._id); // Pass campaign ID to parent component
        } catch (error) {
            console.error("Error creating campaign", error);
            alert("Failed to create campaign. Check console for details.");
        }
    };

    return (
        <div>
            <h2>Create Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Campaign Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div>
                    <label>Contacts (one per line):</label>
                    <textarea value={contacts} onChange={(e) => setContacts(e.target.value)} required />
                </div>
                <button type="submit">Create Campaign</button>
            </form>
        </div>
    );
};

export default CampaignForm;
