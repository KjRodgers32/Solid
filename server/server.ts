import { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		message: "Hello, world",
	});
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
