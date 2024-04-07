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
    const user = await User.find({ id: req.params.id });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const users = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    creationAt: "2024-04-07T14:52:03.000Z",
    updatedAt: "2024-04-07T14:52:03.000Z",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://i.imgur.com/DTfowdu.jpg",
    creationAt: "2024-04-07T14:52:03.000Z",
    updatedAt: "2024-04-07T14:52:03.000Z",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://i.imgur.com/yhW6Yw1.jpg",
    creationAt: "2024-04-07T14:52:03.000Z",
    updatedAt: "2024-04-07T14:52:03.000Z",
  },
  {
    id: 4,
    email: "dima-kaldin@yandex.ru",
    password: "kdm123",
    name: "Дмитрий",
    role: "admin",
    avatar:
      "https://www.google.com/search?sca_esv=004afa00accdc41c&sca_upv=1&sxsrf=ACQVn09z_9xdLNCzMX12waLnZnhXtbqmOg:1712489125367&q=%D0%B4%D1%8D%D0%B2%D0%B8%D0%B4+%D0%B1%D0%BB%D0%B5%D0%B9%D0%BD+%D1%84%D0%BE%D1%82%D0%BE&uds=AMwkrPuudTccVqA8OStP6ka1NE2Df2IQTwgMOimsTx8NN7vA0nikufEYsVR1bTnUvhlGHjYjeZQq-aYUJRswrhO0GdHDaiVyfDSj3TlNCFt6LXy_xaEcXuZOtWF1fecoQRagkPT0qAdoO4XseeuhC7V-DZWZJmYVUidq4tUshc0BzW4JLKNcsypFjk3auApWHS8846RPmBK-qZ03fvO5NmrmjxAnTUiBShNNYDZD6B9lvI4WKw7zEYfhO6FsyPpxUl_rls-IFe0BIFS94nM8hH_If5Gs8oQo9Dt23rWkpi68_0FG26H2AC3n8Z8P-bBVDjQz6M9BkcTbm8CfdjQzd7MP4RGOvUFxiQ&udm=2&prmd=ivnsbmt&sa=X&ved=2ahUKEwj55_6P_6-FAxU6CRAIHWqQCrsQtKgLegQICRAB#vhid=5xguHv-Nz-L4aM&vssid=mosaic",
    creationAt: "2024-04-07T14:53:01.000Z",
    updatedAt: "2024-04-07T14:53:01.000Z",
  },
  {
    id: 5,
    email: "nico@gmail.com",
    password: "1234",
    name: "Nicolas",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T14:55:22.000Z",
    updatedAt: "2024-04-07T14:55:22.000Z",
  },
  {
    id: 6,
    email: "nico@gmail.com",
    password: "1234",
    name: "Nicolas",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T14:55:55.000Z",
    updatedAt: "2024-04-07T14:55:55.000Z",
  },
  {
    id: 7,
    email: "john12@mail.com",
    password: "123456",
    name: "John",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T14:56:45.000Z",
    updatedAt: "2024-04-07T14:56:45.000Z",
  },
  {
    id: 8,
    email: "john12@mail.com",
    password: "123456",
    name: "John",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T14:56:45.000Z",
    updatedAt: "2024-04-07T14:56:45.000Z",
  },
  {
    id: 9,
    email: "nico@gmail.com",
    password: "1234",
    name: "Nicolas",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T14:56:50.000Z",
    updatedAt: "2024-04-07T14:56:50.000Z",
  },
  {
    id: 10,
    email: "john9@mail.com",
    password: "123456",
    name: "John",
    role: "customer",
    avatar: "https://picsum.photos/800",
    creationAt: "2024-04-07T15:06:44.000Z",
    updatedAt: "2024-04-07T15:06:44.000Z",
  }
];

const createUser = async (req, res) => {
  try {
    const { name, email, password, role, address } = req.body;
    const response = await User.insertMany(users);
    console.log(response);
    res.status(201).json({
      status: "success",
      response: response,
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

export { getUsers, createUser, getUser, updateUser, deleteUser };
