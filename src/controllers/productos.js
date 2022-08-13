const products = require('../services/productos');

const productos = {
    newProduct : async ctx => {
        const data = await products.addProduct(ctx.request.body);
        ctx.body = {
            status: 'success',
            message: data,
        }
    },
    getProducts : async ctx => {
        const data = await products.readProducts();
        ctx.body = data;
    },
    updateProduct : async ctx => {
        const data = await products.upProduct(ctx.request.body);
        ctx.body = {
            status: 'success',
            message: data,
        }
    },
    deleteProduct : async ctx => {
        const data = await products.delProduct(ctx.params.id);
        ctx.body = {
            status: 'success',
            message: data,
        }
    }
}

module.exports = productos;