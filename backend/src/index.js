const { connectDB } = require("./config/database.js");
const { app } = require('./app.js');
require('dotenv').config({ path: './.env' });
const http = require('http').Server(app);


connectDB()
    .then(() => {
        http.listen(process.env.PORT || 3000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
