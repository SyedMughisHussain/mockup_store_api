import Product from "../models/product.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category").select("-_id");
    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Product.find({ category: req.params.id }).select("-_id");
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message,
    });
  }
};

export { getCategories, getCategory };
