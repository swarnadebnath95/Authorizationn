const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Mongodb Database");
    } catch (error) {
        console.log(`Error in Mongodb database ${error}`);
    }
    
};

module.exports = dbConnection;
