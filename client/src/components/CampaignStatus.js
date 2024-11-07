import React, { useState, useEffect } from 'react';
import { getCampaignStatus, sendMessages } from '../services/campaignService';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

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
            fetchStatus();
        } catch (error) {
            console.error("Error sending messages", error);
        }
    };

    useEffect(() => {
        fetchStatus();
    }, []);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <h2 className="text-center mb-4">Campaign Status</h2>
                            <p><strong>Messages Sent:</strong> {status.sent}</p>
                            <p><strong>Messages Pending:</strong> {status.pending}</p>
                            <Button variant="success" onClick={handleSendMessages} className="w-100">
                                Send Messages
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CampaignStatus;
