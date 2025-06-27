const { server } = require("./index");
const { connectDb } = require("./config/db");

const PORT=5000;
server.listen(PORT,"0.0.0.0",async ()=>{
    await connectDb()
    console.log("sports api listing on port ",PORT)
})
