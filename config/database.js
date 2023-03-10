const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://houssem:houssem@cluster0.eybupdv.mongodb.net/?retryWrites=true&w=majority',(err,done) =>{
    if (err){
    console.log(err);
}
if (done){
    console.log('base de données connecté avec succés !');
}
}
)
mongoose.Promise = global.Promise;
module.exports = mongoose;