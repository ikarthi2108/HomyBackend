const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String },
        category: { type: String },
        listedIn: { type: String },
        price: { type: Number },
        size: { type: String },
        bedrooms: { type: Number },
        bathrooms: { type: Number },
        kitchens: { type: Number },
        yearBuilt: { type: String },
        floors: { type: Number },
        amenities: { type: [String], default: [] },
        address: { type: String },
        ownerContactNumber:{type: String},
        location: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true },
        },
        city: { type: String }, // Add this line
        images: { type: [String], default: [] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Property', PropertySchema);