const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    connection: null,
    connectDB: async function () {

        if (this.connection) {
            return this.connection;
        }

        return await mongoose.connect(process.env.MONGODB_URI)
            .then((connection) => {
                this.connection = connection;
                console.log('connection successful');
            }
            )
            .catch((error) => console.log(error));
    }
};
