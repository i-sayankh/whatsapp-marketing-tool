import { render, screen, fireEvent } from '@testing-library/react';
import CampaignStatus from './CampaignStatus';
import * as campaignService from '../services/campaignService';

jest.mock('../services/campaignService');

test('renders CampaignStatus and sends messages', async () => {
    campaignService.getCampaignStatus.mockResolvedValue({ data: { sent: 5, pending: 10 } });
    campaignService.sendMessages.mockResolvedValue({});

    render(<CampaignStatus campaignId="testCampaignId" />);

    expect(screen.getByText(/Messages Sent: 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Messages Pending: 10/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Send Messages/i));
    expect(campaignService.sendMessages).toHaveBeenCalledWith("testCampaignId");
});
