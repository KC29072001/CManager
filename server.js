//console.log('Im here ');
const express = require("express");
const errHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');

connectDb();
const app = express();
app.use(cors());

//connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));// need contactRouts whch r exported
//app.use("/api/users", require("./routes/userRoutes"));
app.use(errHandler);

app.listen(port, () => {console.log(`server on ${port}`);});
