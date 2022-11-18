const express = require("express");
const conectarDBUsuarios = require("./config/db");
const cors = require("cors");

const app = express();
conectarDBUsuarios();
app.use(cors());
app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.listen(4002, () => {
  console.log("servidor Usuarios");
});
