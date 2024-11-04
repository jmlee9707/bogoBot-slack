const schedule = require("node-schedule");
const sendDailyBogo = require("./send");

const slackJob = schedule.scheduleJob("0 0 0 * * *", () => {
  sendDailyBogo();
});

function callSlackJob() {
  if (slackJob) {
    console.log("슬랙 작업이 호출되었습니다.");
    sendDailyBogo();
  } else {
    console.log("슬랙 작업이 스케줄되지 않았습니다.");
  }
}

callSlackJob();
