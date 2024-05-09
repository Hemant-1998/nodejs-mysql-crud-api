const express = require("express");
const connectDb = require("./db/connectDb");
const emplyeeRouter = require("./routes/employee");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/employees", emplyeeRouter);

app.get("/", (req, res) => {
  res.send("<h1>api is running: <a href='/api/employees/'>api link</a></h1>");
});

async function startServer() {
  try {
    await connectDb("pando");
    console.log(`connected to DB`);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("error while connecting to Database.", error);
  }
}

startServer();
