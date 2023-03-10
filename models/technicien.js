const mongoose = require("mongoose");
const technicienSchema = mongoose.Schema({
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
        required: true,
    },
    numtel: {
        type: Number,
        required: true,
    },
});
module.exports = Technicien = mongoose.model('technicien',technicienSchema);