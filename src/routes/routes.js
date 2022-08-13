const Router = require('koa-router');
const router = new Router();

// Importacion de los demas routers
const chat = require('./chat')
const index = require('./index');
const productos = require('./productos');

router.use(chat.routes());
router.use(index.routes());
router.use(productos.routes());

module.exports = router;