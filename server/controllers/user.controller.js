import User from "../models/user.model.js";


const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
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

const createUser = async (req, res) => {
  try {
    const user = await User.insertMany([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "user",
        avatar: "avatar1.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password456",
        role: "user",
        avatar: "avatar2.jpg",
      },
      {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
        password: "password789",
        role: "admin",
        avatar: "avatar3.jpg",
      },
      {
        id: 4,
        name: "Emily Brown",
        email: "emily@example.com",
        password: "passwordABC",
        role: "user",
        avatar: "avatar4.jpg",
      },
      {
        id: 5,
        name: "David Wilson",
        email: "david@example.com",
        password: "passwordDEF",
        role: "user",
        avatar: "avatar5.jpg",
      },
      {
        id: 6,
        name: "Sophia Martinez",
        email: "sophia@example.com",
        password: "passwordGHI",
        role: "user",
        avatar: "avatar6.jpg",
      },
      {
        id: 7,
        name: "William Anderson",
        email: "william@example.com",
        password: "passwordJKL",
        role: "user",
        avatar: "avatar7.jpg",
      },
      {
        id: 8,
        name: "Olivia Taylor",
        email: "olivia@example.com",
        password: "passwordMNO",
        role: "user",
        avatar: "avatar8.jpg",
      },
      {
        id: 9,
        name: "James Lee",
        email: "james@example.com",
        password: "passwordPQR",
        role: "user",
        avatar: "avatar9.jpg",
      },
      {
        id: 10,
        name: "Emma Harris",
        email: "emma@example.com",
        password: "passwordSTU",
        role: "user",
        avatar: "avatar10.jpg",
      },
      {
        id: 11,
        name: "Benjamin Clark",
        email: "benjamin@example.com",
        password: "passwordVWX",
        role: "user",
        avatar: "avatar11.jpg",
      },
      {
        id: 12,
        name: "Ava Scott",
        email: "ava@example.com",
        password: "passwordYZA",
        role: "user",
        avatar: "avatar12.jpg",
      },
      {
        id: 13,
        name: "Logan Green",
        email: "logan@example.com",
        password: "passwordBCD",
        role: "user",
        avatar: "avatar13.jpg",
      },
      {
        id: 14,
        name: "Mia King",
        email: "mia@example.com",
        password: "passwordEFG",
        role: "user",
        avatar: "avatar14.jpg",
      },
      {
        id: 15,
        name: "Ethan White",
        email: "ethan@example.com",
        password: "passwordHIJ",
        role: "user",
        avatar: "avatar15.jpg",
      },
      {
        id: 16,
        name: "Isabella Lopez",
        email: "isabella@example.com",
        password: "passwordKLM",
        role: "user",
        avatar: "avatar16.jpg",
      },
      {
        id: 17,
        name: "Jacob Adams",
        email: "jacob@example.com",
        password: "passwordNOP",
        role: "user",
        avatar: "avatar17.jpg",
      },
      {
        id: 18,
        name: "Charlotte Thomas",
        email: "charlotte@example.com",
        password: "passwordQRS",
        role: "user",
        avatar: "avatar18.jpg",
      },
      {
        id: 19,
        name: "Noah Baker",
        email: "noah@example.com",
        password: "passwordTUV",
        role: "user",
        avatar: "avatar19.jpg",
      },
      {
        id: 20,
        name: "Avery Garcia",
        email: "avery@example.com",
        password: "passwordWXY",
        role: "user",
        avatar: "avatar20.jpg",
      },
    ]);
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getUsers, createUser };
