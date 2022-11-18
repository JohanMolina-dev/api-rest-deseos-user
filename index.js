const express = require("express");
const conectarDBUsuarios = require("./config/db");
const cors = require("cors");

const app = express();
conectarDBUsuarios();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.listen(port, () => {
  console.log("servidor Usuarios SERVER ON PORT ${app.get('port')]");
});
