const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET"]
}));

const CharactersRouter = require("./routes/Characters");
app.use("/api", CharactersRouter);


app.listen(port, () => {
  console.log(`A szerver a ${port} porton fut!`);
});