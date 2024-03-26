import User from "../models/user.model.js";

const getUsers = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);

    const queryStr = JSON.stringify(queryObj);

    let query = User.find(JSON.parse(queryStr)).select("-_id");

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    if (req.query.limit) {
      const limitValue = req.query.limit * 1;
      query = query.limit(limitValue);
    }

    const users = await query;
    res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({id: req.params.id})
    res.status(200).json({
      status: "success",
      data: user
    })
  } catch (error) {
    res.status(400).json({ 
      status: "error",
      message: error.message,
    })
  }
}

const createUser = async (req, res) => {
  try {
    const { name, email, password, role, address } = req.body;
    res.status(201).json({
      status: "success",
      data: {
        name,
        email,
        password,
        role,
        address,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.find({ id: req.params.id }).select("-_id");
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password, role, address } = req.body;
    const user = await User.find({ id: req.params.id }).select("-_id");
    user[0].name = name;
    user[0].email = email;
    user[0].password = password;
    user[0].role = role;
    user[0].address = address;
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};



export { getUsers, createUser, getUser, updateUser, deleteUser};
