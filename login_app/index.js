
const express = require("express");
const dotenv = require("dotenv");
const  cookieParser = require( "cookie-parser");
const cors = require("cors");
const db = require("./config/Database");
const router = require("./routes/index.js");
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));
