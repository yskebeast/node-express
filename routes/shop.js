const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// 上のuse()にnext()がないので、以下のuse()は実行されない
router.get("/", productsController.getproducts);

module.exports = router;
