const webPush = require("web-push");
const dotenv = require("dotenv");

dotenv.config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
  "mailto:tainguyen197.ntt@gmail.com",
  publicVapidKey,
  privateVapidKey
);

module.exports = webPush;
