const express = require("express");
const router = express.Router();
const {
  postUrl,
  getAllUrl,
  getOneUrl,
  deleteUrl,
} = require("../controllers/shortUrl");

router.get("/", getAllUrl);
router.post("/shortUrls", postUrl);
router.get("/:shortUrl", getOneUrl);
router.delete("/:shortUrl", deleteUrl);

module.exports = router;
