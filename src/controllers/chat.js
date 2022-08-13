const chats = require('../services/chat');

const chat = {
    newMessage : async ctx => {
        const data = await chats.addMessage(ctx.request.body);
        ctx.body = {
            status: 'success',
            message: data,
        }
    },
    getMessages : async ctx => {
        const data = await chats.readMessages();
        ctx.body = data;
    }
}

module.exports = chat;