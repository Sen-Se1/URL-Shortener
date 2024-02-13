const ShortUrl = require("../models/shortUrl");

exports.postUrl = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.create({
      full: req.body.fullUrl,
    });
    if (shortUrls) {
      return res.redirect("/?msg=The%20shrink%20has%20been%20successful");
    }
    return res.redirect("/?err=Error%20!!");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.getAllUrl = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.render("index", { shortUrls: shortUrls });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.getOneUrl = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({
      short: req.params.shortUrl,
    });
    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

exports.deleteUrl = async (req, res) => {
  try {
    await ShortUrl.findOneAndDelete({ _id: req.params.shortUrl });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
