const router = require('express').Router();
const controller = require('../controllers/message-controller');

router.post('/', controller.save);
router.get('/', controller.findAll);

module.exports = router;
