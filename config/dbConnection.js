const mongoose = require("mongoose");
const { connect } = require("../routes/contactRoutes");
const connectDb = async()=>
{
    try
    {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("db connected",mongoose.connection.name,mongoose.connection.host);
    }

    catch(err)
    {
        console.log(err);
        process.exit(1);
    }

};

module.exports = connectDb;