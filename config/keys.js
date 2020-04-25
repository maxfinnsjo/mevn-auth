const dotenv = require("dotenv");
dotenv.config();

if(process.env.NODE_ENV == 'production'){
    module.exports = {
        mongoURI: process.env.MONGO_URI,
        secret: process.env.SECRET,
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/mevn_auth",
        secret: 'your_secret_sauce_is_raspberries_and_hot_oil'   
    };
}
