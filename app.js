const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./app/config/db');

dotenv.config();
dbConnection();
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const userRoute = require('./app/routes/userApiRoute');
app.use("/api", userRoute);
const productRoute = require('./app/routes/productApiRoute');
app.use("/api", productRoute);


const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT}`);
});