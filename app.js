const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

//Initialize The App
const app = express();

// Form Data Middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Setting Up The Static Directory
app.use(express.static(path.join(__dirname, "public")));

// Passport middleware
app.use(passport.initialize());
// Passport strategy
require("./config/passport")(passport);

// Database Configuration - Database Connection
const db = require("./config/keys").mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log(`Database connection successful`);
/* 		console.log(`Database connection successful: ${db}`); */
	})
	.catch((err) => {
		console.log(`Database connection failed: ${err}`);
	});

/* app.get('/', (req, res) => {
  return res.send("<h1>Hi Space</h1>")
}); */

// Users route
const users = require("./routes/api/users");
app.use("/api/users", users);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

// Assign port and listen for server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
