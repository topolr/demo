let express = require("express");
let {DistSteamRenderer} = require("adajs/server");
let Path = require("path");

const distPath = Path.resolve(__dirname, "./dist");

let app = new express();

app.get("/", (req, res) => {
	let renderer = new DistSteamRenderer({
		origin: "http://localhost:8080",
		distPath
	});
	renderer.outputStream("/").pipe(res);
});

module.exports = app;