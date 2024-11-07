import './App.css';
import React, { useState } from 'react';
import CampaignForm from './components/CampaignForm';
import CampaignStatus from './components/CampaignStatus';

const App = () => {
  const [campaignId, setCampaignId] = useState(null);

  return (
    <div>
      <h1>WhatsApp Marketing Tool</h1>
      {!campaignId ? (
        <CampaignForm onCampaignCreated={setCampaignId} />
      ) : (
        <CampaignStatus campaignId={campaignId} />
      )}
    </div>
  );
};

export default App;
