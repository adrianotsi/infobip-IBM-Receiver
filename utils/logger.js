// TODO: Add uma forma melhor para controle de logs
exports.log = (message, data) => {
    console.log(`[LOG] ${message}`, data || '');
};

exports.error = (message, error) => {
    console.error(`[ERROR] ${message}`, error.message || error);
};
