const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send({ title: "My First Backend Practice" });
	// console.log("My First Backend Practice");
});

app.post("/addItem", (req, res) => {
	const item = req.body;
	console.log(item);
	res.send(item);
});

app.listen(4500, () => console.log("Listening on port 4500"));
