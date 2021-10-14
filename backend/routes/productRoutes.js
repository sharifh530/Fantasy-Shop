import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@desc Fetch all Products
//@route Get  /api/products
//@access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error("Some Error");
    res.json(products);
  })
);

//@desc Fetch single Products
//@route Get  /api/products/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(400).json({ message: "product not found" });
      throw new Error("Product not found");
    }
  })
);

export default router;
