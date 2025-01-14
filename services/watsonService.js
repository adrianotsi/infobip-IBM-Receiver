const axios = require('axios');

const WATSON_API_KEY = process.env.WATSON_API_KEY;
const WATSON_INSTANCE_URL = process.env.WATSON_INSTANCE_URL;
const WATSON_ASSISTANT_ID = process.env.WATSON_ASSISTANT_ID;

exports.createSession = async () => {
    const response = await axios.post(
        `${WATSON_INSTANCE_URL}/v2/assistants/${WATSON_ASSISTANT_ID}/sessions?version=2021-11-27`,
        {},
        {
            auth: { username: 'apikey', password: WATSON_API_KEY },
            headers: { 'Content-Type': 'application/json' },
        }
    );
    return response.data.session_id;
};

// TODO: Add outros tipos de mensagem além de text
exports.sendMessage = async (sessionId, text) => {
    const response = await axios.post(
        `${WATSON_INSTANCE_URL}/v2/assistants/${WATSON_ASSISTANT_ID}/sessions/${sessionId}/message?version=2021-11-27`,
        { input: { text } },
        {
            auth: { username: 'apikey', password: WATSON_API_KEY },
            headers: { 'Content-Type': 'application/json' },
        }
    );
    console.log(response)
    return response.data.output.generic[0]?.text || 'Resposta padrão do Watson';
};
