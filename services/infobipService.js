const axios = require('axios');

const INFOBIP_BASE_URL = process.env.INFOBIP_BASE_URL;
const INFOBIP_AUTHORIZATION = `App ${process.env.INFOBIP_AUTHORIZATION}`;
const SEND_NUMBER = process.env.SEND_NUMBER

// TODO: Add outros tipos de mensagem além de text
exports.sendMessage = async (to, text) => {
    try {
        const payload = {
            from: SEND_NUMBER,
            to,
            messageId: `msg-${Date.now()}`,
            content: { text },
        };

        const response = await axios.post(
            `${INFOBIP_BASE_URL}/whatsapp/1/message/text`,
            payload,
            {
                headers: {
                    Authorization: INFOBIP_AUTHORIZATION,
                    'Content-Type': 'application/json',
                    'accept-encoding': 'gzip, deflate, br',
                },
            }
        );

        return response.data;
    } catch (error) {
        logger.error('Erro ao processar mensagem', error.response?.data || error.message);
        throw error;
    }
};