const mongoose = require('mongoose');
const { lazy } = require('react');

const RestaurantSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    imageUrl: {type: String, required: true},
    foods: {type: Array, default: []},
    pickup: {type: Boolean, required: true},
    delivery: {type: Boolean, required: true},
    isAvailable: {type: Boolean, required: true},
    owner: {type: String, required: true},
    code: {type: String, required: true},
    logoUrl: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 3},
    imageUrl: {type: String, required: true},
    ratingCount: {type: String, default: "276"},
    verification: {type: String, default: "Pending", enum: ["Pending", "Verified", "Rejected"]},
    verificationMessage: {type: String, default: "Your restaurant is under review. You will be notified once it is verified."},
    coords:{
        id: {type: String, },
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true},
        latitudeDelta: {type: Number, default: 0.0922},
        longitudeDelta: {type: Number, default: 0.0421},
        address: {type: String, required: true},
        title: {type: String, required: true},

    }


});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
