import express from "express";

const app = express();
const port = 4009;

//routes
app.get("/", (request, response) => {
  return response.json({ message: "Hello World - NLW04" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

//initializing express
app.listen(port, () => console.log(`running server on port: ${port}`));
