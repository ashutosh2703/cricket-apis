const { app } = require("./index");
const { connectDb } = require("./config/db");

const PORT=5000;
app.listen(PORT,"0.0.0.0",async ()=>{
    await connectDb()
    console.log("sports api listing on port ",PORT)
})
