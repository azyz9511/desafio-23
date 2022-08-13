// Importaciones
const Koa = require('koa');
const koaBody = require('koa-body');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

// importacion de routers
const routers = require('./src/routes/routes');

// middlewares
render(app, {
    root: path.join(__dirname + '/src/', 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})
app.use(koaBody());
app.use(routers.routes());
app.use(serve(__dirname+'/src/public'));

//inicio de servidor
app.listen(8080, () => console.log('Servidor levantado con koa en puerto 8080'));