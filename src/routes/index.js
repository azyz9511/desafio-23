const Router = require('koa-router');
const router = new Router({
    prefix: '/'
});
const index = require('../controllers/index');

router.get('/', index);

module.exports = router;