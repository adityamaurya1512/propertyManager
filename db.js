const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongo_uri);
        console.log(`${connection.connection.name } database connected ` );
    } catch (error) {
        console.log('something sent wrong while connecting to database', error)
        process.exit(1);
    }
};

module.exports = connectDB;