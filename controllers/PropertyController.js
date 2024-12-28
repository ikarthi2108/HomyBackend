const Property = require('../models/Property');

// @desc    Add a new property
// @route   POST /api/properties
// @access  Public
exports.addProperty = async (req, res) => {
    console.log('Incoming request body:', req.body);

    try {
        const {
            title,
            description,
            category,
            listedIn,
            price,
            size,
            bedrooms,
            bathrooms,
            kitchens,
            yearBuilt,
            floors,
            amenities,
            address,
            location,
            images, // Image URLs from frontend
            userId,
            city, // City provided by the user
        } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required',
            });
        }

        // Validate city input
        if (!city) {
            return res.status(400).json({
                success: false,
                message: 'City is required',
            });
        }

        // Create the property in the database
        const property = await Property.create({
            userId,
            title,
            description,
            category,
            listedIn,
            price,
            size,
            bedrooms,
            bathrooms,
            kitchens,
            yearBuilt,
            floors,
            amenities,
            address,
            location,
            city, // Use the city provided by the user
            images,
        });

        res.status(201).json({
            success: true,
            message: 'Property added successfully',
            property,
        });
    } catch (error) {
        console.error('Error adding property:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding property',
            error: error.message,
        });
    }
};

// @desc    Get all properties
// @route   GET /api/properties
// @access  Public
exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json({
            success: true,
            properties,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching properties',
            error: error.message,
        });
    }
};