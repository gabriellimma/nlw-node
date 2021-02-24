import express from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

const app = express();
const port = 4009;

app.use(express.json());
app.use(router);

//initializing express
app.listen(port, () =>
  console.log(`running server on port: ${port} \nuse http://localhost:${port}/`)
);
