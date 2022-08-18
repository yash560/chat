const express = require("express");
const {
  accessChat,
  fetchChats,
  createChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(fetchChats);
router.route("/Single").post(createChat);

module.exports = router;
