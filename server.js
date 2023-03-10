const express = require('express');
//const Technicien = require("./models/technicien");
//const Admin = require("./models/admin");
//const Supervisor = require("./models/supervisor");
const bodyParser = require("body-parser");
const database = require('./config/database')


const app = express();


app.get('/bonjour',(req,res)=>{ res.send('hello world')})
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.use(express.json());






const adminRouter=require('./routers/adminRouter');
const technicienRouter=require('./routers/technicienRouter');
const supervisorRouter=require('./routers/supervisorRouter');


app.use('/technicien',technicienRouter);
app.use('/admin',adminRouter);
app.use('/supervisor',supervisorRouter);




//mongoose.set("strictQuery", false);
//mongoose.connect('mongodb+srv://houssem:houssem@cluster0.eybupdv.mongodb.net/?retryWrites=true&w=majority',(err,done) =>{
//    if (err){
//    console.log(err);
//}
//if (done){
//    console.log('base de données connecté avec succés !');
//}
//}
//)


app.listen(8000,() => console.log("serveur est bien en marche!"));