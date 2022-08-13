const Router = require('koa-router');
const router = new Router({
    prefix: '/productos'
});
const productos = require('../controllers/productos');

router.post('/', productos.newProduct);
router.get('/', productos.getProducts);
router.put('/', productos.updateProduct);
router.delete('/:id', productos.deleteProduct);

module.exports = router;