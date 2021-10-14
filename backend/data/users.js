import bcrypt from "bcryptjs";

const users = [
  {
    isAdmin: false,
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("sharif006", 10),
  },
  {
    isAdmin: false,
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("sharif006", 10),
  },
  {
    isAdmin: true,
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("sharif006", 10),
  },
];

export default users;
