const TelegramAPI = require("node-telegram-bot-api");

const token = "2084358473:AAHJmTmIlgZFOx_pZ49y7aY_D41Apxv67wo";
const adminId = 1636847424;

const bot = new TelegramAPI(token, {polling: true, request: {family: 4}});

bot.on('message', msg => {
        const {text, chat, document, voice, sticker, video} = msg;
        if (chat.id !==  adminId) {
            bot.sendMessage(chat.id, "Извините, но я принимаю сообщения только от [него](https://t.me/Mnsr_Il)",
                    {parse_mode : 'markdown'});

            console.log(msg);
        }
});

const sendRequestToAdmin = async (requestId, barberName, clientId, total) => {
    await bot.sendMessage(adminId,
        `📎 Заявка №${requestId}\n` +
        `Парикмахер: ${barberName} [Иса](http://t.me/bisliew)\n` +
        `🆔 клиента: --> ${clientId}\n` +
        `На сумму: ${total}$`
        , {parse_mode: 'markdown'});
};

bot.on("polling_error", console.log);

module.exports.sendRequestToAdmin = sendRequestToAdmin;

module.exports = bot;