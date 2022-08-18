const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");

const router = express.Router();

router.route("/:chatId").get(allMessages);
router.route("/").post(sendMessage);

module.exports = router;
