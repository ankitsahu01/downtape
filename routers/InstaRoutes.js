const express = require("express");
const router = express.Router();
require("dotenv").config();

const instagramGetUrl = require("instagram-url-direct");

router.get("/getLink", async (req, res) => {
  try {
    let url = req.query.url;
    url = url.replace("?utm_medium=copy_link", "");
    const data = await instagramGetUrl(url);
    const downloadLink = data.url_list[0];
    res.status(200).json({ downloadLink });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

const { request } = require("gaxios");
router.get("/download", async (req, res) => {
  const { url } = req.query;
  const title = "DownTape_" + Date.now();
  const result = await request({
    url,
    responseType: "stream",
  });
  const clen = result.headers["content-length"];
  res.header("Content-Disposition", `attachment; filename="${title}.mp4"`);
  res.header("Content-Type", "video/mp4");
  res.header("Content-Length", clen);
  result.data.pipe(res);
});

module.exports = router;
