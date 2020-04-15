const db = require('../../database');

const Schema = new db.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: db.Schema.Types.ObjectID,
        ref: 'User'
    }
});

module.exports = db.model('Message', Schema);
