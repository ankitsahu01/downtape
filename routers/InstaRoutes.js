const express = require("express");
const router = express.Router();
require("dotenv").config();
const Insta = require("scraper-instagram");
const InstaClient = new Insta();

/*
https://www.instagram.com/p/CjI_B_7p4It/?hl=en
https://www.instagram.com/p/CjGLK4Qjwfj/?hl=en
*/
const instagramGetUrl = require("instagram-url-direct")

router.get("/getLink", async (req, res) => {
  try {
    let url = req.query.url;
    let links = await instagramGetUrl(url);
    console.log(links);
    url = url.replace("?utm_medium=copy_link", "");
    let shortcode = url.split("/");
    shortcode = shortcode[shortcode.length - 2];
    // console.log(process.env.INSTA_SESSION_ID);
    await InstaClient.authBySessionId(process.env.INSTA_SESSION_ID);
    const data = await InstaClient.getPost(shortcode);
    const downloadLink = data.contents[0].url;
    res.status(200).json({ downloadLink });
  } catch (err) {
    if (err === 401) {
      console.log("Invalid Insta SessionId");
      res.status(404).json({ error: "Invalid Insta SessionId" });
    } else if (err === 429) {
      console.log("Too Many Requests");
      res.status(404).json({ error: "Too Many Requests" });
    } else {
      console.log(err);
      res.status(404).json(err);
    }
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
