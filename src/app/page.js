import Image from "next/image";
import styles from "./page.module.css";
const TgBotApi = require("node-telegram-bot-api");
const token = process.env.NEXT_TOKEN;
const bot = new TgBotApi(token, { polling: true });
const start = () => {
  bot.setMyCommands([
    { command: "/hello", description: "Привет" },
    { command: "/what_is_your_name", description: "Как вас зовут" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://dominishop.ru/upload/resize_cache/webp/iblock/5a4/n3lwfunldnkuf7npl3sof8a31oodyn3l.webp"
      );
      await bot.sendMessage(chatId, `Привет ${msg.from.first_name}`);
    } else if (text === "/hello") {
      await bot.sendMessage(chatId, `Привет ${msg.from.first_name}`);
    } else if (text === "/what_is_your_name") {
      await bot.sendMessage(
        chatId,
        `By ${msg.from.first_name} /hello \n /what_is_your_name`
      );
    }
  });
};
export default function Home() {
  start();
  console.log("NEXT_TOKEN", token);
  return <main>hi</main>;
}
