const service = require('../services/message-service');

module.exports = {
    async save(req, res) {
        const message = req.body;

        await service.save(message)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error));
    },
    async findAll(req, res) {
        const {limit} = Number(req.query);

        await service.findAll(limit)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error));
    },
};
