const Admin = require('../models/admin')

module.exports={

    getAdmin: async (req, res) => {
    try{
await Admin.find({})
    .then(result=>{
        res.send(result)
    })
}
    catch(err){
    console.log(err);
    }
     
},



addAdmin: async (req, res) => {
    try {
    let new_admin = new Admin({
        cin: req.body.cin,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        numtel: req.body.numtel,
    });

    await new_admin.save();
    res.send("save effectué avec succées !");
}
catch(err){
    console.log(err);
}
},



deleteAdmin: async(req, res)=>{
try{
await Admin.findOneAndDelete({ _id: req.params.id });
res.send('supprimé avec succées...!');
    } 
catch(err){
res.send(err);
    }    
},




updateAdmin: async(req,res)=>{
    try{
        await Admin.findOneAndUpdate({_id:req.params.id},
            {
                email:req.body.email,
            }
            );
            res.send("mise à jour avec succées...!");
    }
    catch(err)
    {
        res.send(err);
    }
}
}
