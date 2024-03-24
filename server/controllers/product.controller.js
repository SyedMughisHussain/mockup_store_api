import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    if (req.query.limit) {
      const products = await Product.find({}).limit(req.query.limit);
      res.status(200).json({
        status: "success",
        results: products.length,
        data: products,
      });
    } else {
      const products = await Product.find({}).select("-_id");
      res.status(200).json({
        status: "success",
        results: products.length,
        data: products,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id });
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getProducts, createProduct, getProduct };
