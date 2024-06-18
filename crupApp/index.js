import express from "express";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

/* Database Array */
const users = [];
let index = 1;

/* User Post Api */
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ message: "name and email is required" });
    return;
  }
  const user = {
    id: index++,
    name: name,
    email: email,
  };
  users.push(user);
  res.status(201).json(user);
});

/* Uses Get Api */
app.get("/users", (req, res) => {
  if (users.length === 0) {
    res.status(404).json({ message: "No user found" });
    return;
  }

  res.status(200).json(users);
});

/* Delete User Api */
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully" });
});

/* Edit User */
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  if (!name || !email) {
    res.status(400).json({ message: "name and email is required" });
    return;
  }
  users[userIndex].name = name;
  users[userIndex].email = email;
  res.status(200).json(users[userIndex]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
