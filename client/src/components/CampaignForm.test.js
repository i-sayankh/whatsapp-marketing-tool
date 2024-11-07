import { render, screen, fireEvent } from '@testing-library/react';
import CampaignForm from './CampaignForm';

test('renders CampaignForm and submits data', async () => {
    const mockSubmit = jest.fn();
    render(<CampaignForm onCampaignCreated={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/Campaign Name/i), { target: { value: 'Test Campaign' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message' } });
    fireEvent.change(screen.getByLabelText(/Contacts/i), { target: { value: '+1234567890\n+9876543210' } });

    fireEvent.click(screen.getByText(/Create Campaign/i));
    expect(mockSubmit).toHaveBeenCalled();
});
