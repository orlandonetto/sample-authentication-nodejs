const router = require('express').Router();
const userRouter = require('./user-router');
const messageRouter = require('./message-router');
const {authenticate} = require('../middlewares/authentication');

router.use('/user', userRouter);
router.use('/message', authenticate, messageRouter);

module.exports = router;
