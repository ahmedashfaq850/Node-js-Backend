import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("this response is from contact route");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
