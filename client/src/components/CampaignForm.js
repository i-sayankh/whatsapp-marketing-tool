import React, { useState } from 'react';
import { createCampaign } from '../services/campaignService';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

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
            onCampaignCreated(response.data._id);
        } catch (error) {
            console.error("Error creating campaign", error);
            alert("Failed to create campaign. Check console for details.");
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <h2 className="mb-4 text-center">Create Campaign</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="campaignName" className="mb-3">
                                    <Form.Label>Campaign Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter campaign name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="message" className="mb-3">
                                    <Form.Label>Message:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter message to be sent"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="contacts" className="mb-4">
                                    <Form.Label>Contacts (one per line):</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        value={contacts}
                                        onChange={(e) => setContacts(e.target.value)}
                                        placeholder="Enter contacts (one per line)"
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Create Campaign
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CampaignForm;
