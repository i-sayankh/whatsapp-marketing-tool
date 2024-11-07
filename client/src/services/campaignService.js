import axios from 'axios';

const API_URL = "http://localhost:5000/api/campaign";

export const createCampaign = async (data) => {
    return await axios.post(`${API_URL}/create`, data);
};

export const getCampaignStatus = async (id) => {
    return await axios.get(`${API_URL}/status/${id}`);
};

export const sendMessages = async (id) => {
    return await axios.post(`${API_URL}/send/${id}`);
};
