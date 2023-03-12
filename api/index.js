const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const coverpageRoute = require("./routes/coverpages");
const mottoRoute = require("./routes/motto");
const projectRoute = require("./routes/projects");
const certificateRoute = require("./routes/certificates");
const skillsRoute = require("./routes/skills");
const hobbyRoute = require("./routes/hobbies");
const blogRoute = require("./routes/blogs");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    dbName: process.env.DB_NAME
}).
then(() => console.log('Database Connected')).catch(err => console.log(err));

app.use(cors());

app.use("/api/coverpages",coverpageRoute);
app.use("/api/motto",mottoRoute);
app.use("/api/projects",projectRoute);
app.use("/api/certificates",certificateRoute);
app.use("/api/skills", skillsRoute);
app.use("/api/hobbies", hobbyRoute);
app.use("/api/blogs", blogRoute);

app.listen("5000",() => {
    console.log("Backend is running.");
});