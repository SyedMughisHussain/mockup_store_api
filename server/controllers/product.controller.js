import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);

    const queryStr = JSON.stringify(queryObj);

    let query = Product.find(JSON.parse(queryStr)).select("-_id");

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    if (req.query.limit) {
      const limitValue = req.query.limit * 1;
      query = query.limit(limitValue);
    }
    const products = await query;
    res.status(200).json({
      status: "success",
      results: products.length,
      data: products,
    });
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
    const { title, price, description, image, category, rating } = req.body;
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: { title, price, description, image, category, rating },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id }).select("-_id");
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { title, price, description, image, category, rating } = req.body;
    const product = await Product.find({ id: req.params.id }).select("-_id");
    console.log(product[0].id);
    product[0].title = title;
    product[0].price = price;
    product[0].description = description;
    product[0].image = image;
    product[0].category = category;
    product[0].rating = rating;
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getProducts, createProduct, getProduct, deleteProduct, updateProduct };
