const db = require('../../database');
const bcrypt = require('bcryptjs');

const Schema = new db.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

Schema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

module.exports = db.model('User', Schema);
