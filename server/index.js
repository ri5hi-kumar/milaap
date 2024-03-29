const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// const {registerUser} = require('./controllers/userController')
// const {addPet} = require('./controllers/petController')

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is home');
})

app.use('/api/application', require('./routes/userRoutes'));
app.use('/api/pets', require('./routes/petRoutes'));

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// addPet();
// registerUser();

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});