const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: [true, 'Username is already in use.'],
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'Email is already in use.'],
        },
        phone: {
            type: Number,
            default: null,
            requried: true,
        },
        address: {
            type: String,
            default: null,
            requried: true,
        },
        occupation: {
            type: String,
            default: null,
            requried: true,
        },
        availability: {
            type: Boolean,
            required: true,
        },
        pet: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Pet'
        }
    },
    { timestamps: true }
);

// userSchema.pre('save', async function (next) {
//     const salt = await bcrypt.genSalt(8);
//     this.password = await bcrypt.hash(this.password, salt);
//     this.token = generateAuthToken(this);
//     next();
// });

module.exports = mongoose.model('User', userSchema);