const Message = require('../models/Message');

module.exports = {
    async save(message) {
        return new Promise(async (resolve, reject) => {
            try {
                await Message.create(message);

                resolve({success: true, message: "Message sent successfully."});
            } catch (e) {
                reject({success: false, message: e.message});
            }
        });
    },
    async findAll(limit = 10) {
        return new Promise(async (resolve, reject) => {
            try {
                const messages = await Message.find().sort({createdAt: -1}).limit(limit);
                resolve({success: true, messages});
            } catch (e) {
                reject({success: false, message: e.message});
            }
        });
    },
};
