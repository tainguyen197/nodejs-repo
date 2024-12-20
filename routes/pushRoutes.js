const express = require("express");
const router = express.Router();
const webPush = require("@utils/webPush");
const e = require("express");

let subscriptions = []; // Store the subscription objects

// Route to subscribe to push notifications
router.post("/subscribe", (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(200).json({ success: true });
});

router.get("/", (req, res) => {
  console.log(subscriptions);
  res.send("api/notification is working");
});

// Route to send a push notification
router.post("/send", (req, res) => {
  const notificationPayload = {
    title: "Test Notification",
    body: "This is a test notification from server",
  };
  const sendNotification = (subscription, delay) => {
    setTimeout(() => {
      webPush
        .sendNotification(subscription, JSON.stringify(notificationPayload))
        .then(() => console.log("Notification sent"))
        .catch((err) => console.error("Error sending notification:", err));
    }, delay);
  };

  subscriptions.forEach((subscription, index) => {
    sendNotification(subscription, index * 5000); // 5 seconds interval
  });
});

module.exports = router;
