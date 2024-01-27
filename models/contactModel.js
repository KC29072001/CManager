const mongoose = require("mongoose");
const cs = mongoose.Schema
(
    {
        name:
        {
            type: String,
            required:[true,"Please add cont. name"],

        },
        email:
        {
            type: String,
            required: [true,"Please add cont. mail"],
        },
        phone:
        {
            type:String,
            required:[true,"Please add cont. phone"],
        }
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Contact",cs);
//cont schema as cs 