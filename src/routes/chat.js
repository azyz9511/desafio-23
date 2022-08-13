const Router = require('koa-router');
const router = new Router({
    prefix: '/chat'
});
const chat = require('../controllers/chat');

router.post('/', chat.newMessage);
router.get('/', chat.getMessages);

module.exports = router;