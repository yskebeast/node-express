const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// 上のuse()にnext()がないので、以下のuse()は実行されない
router.get("/", (req, res, next) => {
  //   console.log("In another middleware");
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
