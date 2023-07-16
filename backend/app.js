const express = require("express");
const PythonShell = require("python-shell").PythonShell;
const fs = require("fs");
const app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  console.log(req);
});

let options = {
  mode: "text",
  pythonOptions: ["-u"], // get print results in real-time
  args: [2, 3, 4],
};
let u = "";
PythonShell.run("main.py", options).then((messages) => {
  u = messages;
  console.log("finished", messages);
});
app.get("/stroke", (req, res) => {
  console.log(req.query);
  res.send(u);
});

const port = 3000;
app.listen(port, () => console.log(`Server connected to ${port}`));
