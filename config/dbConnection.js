const mongoose = require("mongoose");
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(" Databsae Connected:",connect.connection.host)
    }

}