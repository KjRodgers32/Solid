import { Request, Response } from "express";
const app = require("./app");

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		message: "Hello, world",
	});
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
