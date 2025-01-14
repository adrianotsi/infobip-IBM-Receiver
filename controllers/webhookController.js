const { createSession, sendMessage: sendWatsonMessage } = require('../services/watsonService');
const { sendMessage: sendInfobipMessage } = require('../services/infobipService');
const logger = require('../utils/logger');

exports.handleWebhook = async (req, res) => {
    const inputMessage = req.body;

    logger.log('Mensagem receibda:', inputMessage);

    if (!inputMessage) {
        logger.error('Erro ao receber mensagem', inputMessage);
        return res.status(400).send('Erro ao receber mensagem');
    }

    try {
      for (const result of inputMessage.results) {
          const { message, from } = result;

          if (!message || !message.text) {
              logger.error('Mensagem inválida no resultado', result);
              continue;
          }

          // Watson: Criar sessão e enviar mensagem
          // TODO: Melhorar lógica em que a sessão é criada
          const sessionId = await createSession();
          logger.log('ID da sessão criado', sessionId)
          const watsonMessage = await sendWatsonMessage(sessionId, message.text);
          logger.log('Mensagem do Watson', watsonMessage)
          // Infobip: Enviar resposta
          await sendInfobipMessage(from, watsonMessage);

          logger.log('Mensagem processada e enviada com sucesso!');
      }
      res.status(200).send('Mensagens processadas com sucesso!');
  } catch (error) {
      logger.error('Erro ao processar mensagem', error);
      res.status(500).send('Erro ao processar mensagem');
  }
};
