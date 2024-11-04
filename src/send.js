require("dotenv").config();

const { WebClient } = require("@slack/web-api");
const { calcToday } = require("./calcToday");
const slackBot = new WebClient(process.env.DATABASE_SLACK_TOKEN);

const sendDailyBogo = async () => {
  const channel = process.env.DATABASE_CHANNEL_ID;
  const date = calcToday();

  try {
    const message = date + " 데일리보고";
    await slackBot.chat.postMessage({
      channel: channel,
      text: message,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = sendDailyBogo;
