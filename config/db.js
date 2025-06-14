const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://ashutosh272006:i38ARCF9HTNfDPiu@cluster0.gmngwii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}