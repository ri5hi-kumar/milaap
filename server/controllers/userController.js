const User = require('../models/user');
const Pet = require('../models/pet');
const asyncHandler = require("express-async-handler");

exports.registerUser = asyncHandler(async (req, res) => {
    const user1 = {
        name: "DK",
        email: "dk@gmail.com",
        phone: 12133234,
        address: "Punjab",
        occupation: "Singer",
        availability: true,
        pet_name: "Ronni"
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
    const petExists = await User.findOne({ pet_name: user1.pet_name });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    if (!petExists) {
        res.status(400);
        throw new Error('Pet with this name not exists');
    }

    //const test = new User();
    // test.name = user1.name;
    // test.email = user1.email;
    // test.address = user1.address;
    // test.occupation = user1.occupation;
    // test.availability = user1.availability;
    // test.phone = user1.phone;
    // test.pet_name = user1.pet_name;
    
    const test = new User({
        name: user1.name,
        email: user1.email,
        address: user1.address,
        occupation: user1.occupation,
        availability: user1.availability,
        phone: user1.phone,
        pet_name: user1.pet_name,
    });

    try {
        await newUser.save();
        petExists.applicants.push(newUser._id);
        await petExists.save();

    } catch (e) {
        console.log("Error creating a applicant\n", e);
    }
});