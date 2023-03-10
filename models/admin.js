const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
    cin: {
        type: Number,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    numtel: {
        type: Number,
        required: true,
    },
});
module.exports = Admin = mongoose.model('admin',adminSchema);