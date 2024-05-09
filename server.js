const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require('./routes/category');
// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('FoodBuddy Database Connected!'))
.catch((err) => console.log('Database connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/category", CategoryRoute);


// Starting the server
app.listen(process.env.PORT, () => {
    console.log(`FoodBuddy Backend is running on ${process.env.PORT}!`);
});
