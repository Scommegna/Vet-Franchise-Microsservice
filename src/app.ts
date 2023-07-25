import { Request, Response } from "express";

const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, console.log(`App is listening to port ${port}`));
