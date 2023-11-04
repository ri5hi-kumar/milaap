const User = require('../models/user');
const Pet = require('../models/pet');
const asyncHandler = require("express-async-handler");

exports.addPet = asyncHandler(async (req, res) => {
    const pet1 = {
        name: "Ronni",
        adopted: false,
        applicants: [],
        age: 10,
        type: "Dog",
        gender: "male",
        pictures: [],
        vaccinated: true,
        description: "Nice Dog",
    };

    if (!pet1.name || !pet1.age || !pet1.type) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // const userExists = await User.findOne({ email: user1.email });
    const petExists = await Pet.findOne({ name: pet1.name });

    if (petExists) {
        res.status(400);
        throw new Error('Pet already exists');
    }

    const test = new Pet({
        name: pet1.name,
        adopted: pet1.adopted,
        applicants: pet1.applicants,
        age: pet1.age,
        type: pet1.type,
        gender: pet1.gender,
        pictures: pet1.pictures,
        vaccinated: pet1.vaccinated,
        description: pet1.description,
    });

    try {
        await test.save();
    } catch (e) {
        console.log("Error creating a applicant\n", e);
    }
});