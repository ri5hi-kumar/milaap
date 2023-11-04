const User = require('../models/user');
const Pet = require('../models/pet');
const asyncHandler = require("express-async-handler");

exports.registerUser = asyncHandler(async (req, res) => {
    const pet_name = "Ronni";
    const petExists = await Pet.findOne({ name: pet_name });
    if (!petExists) {
        res.status(400);
        throw new Error('Pet with this name not exists');
    }

    const user1 = {
        name: "DK",
        email: "dk@gmail.com",
        phone: 12133234,
        address: "Punjab",
        occupation: "Singer",
        availability: true,
        pet: petExists._id,
        
        // name: req.body.name,
        // email: req.body.email,
        // phone: req.body.phone,
        // address: req.body.address,
        // occupation: req.body.occupation,
        // availability: req.body.availability,
    };

    if (!user1.name || !user1.email || !user1.phone || !user1.address || !user1.availability || !user1.occupation) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email: user1.email });
    

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const test = new User({
        name: user1.name,
        email: user1.email,
        address: user1.address,
        occupation: user1.occupation,
        availability: user1.availability,
        phone: user1.phone,
        pet: petExists._id,
    });

    try {
        await test.save();
        petExists.applicants.push(test._id);
        await petExists.save();

    } catch (e) {
        console.log("Error creating a applicant\n", e);
    }
});