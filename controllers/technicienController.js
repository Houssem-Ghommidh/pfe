const Technicien = require('../models/technicien')




module.exports={

    getTechnicien: async(req, res) => {
    try{
await Technicien.find({}) 
    .then(result=>{
        res.send(result)
    })
}
    catch(err){
    console.log(err);
    }
     
},




addTechnicien: async (req, res) => {
    try {
    let new_technicien = new Technicien({
        cin: req.body.cin,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        numtel: req.body.numtel,
    });

    await new_technicien.save();
    res.send("save effectué avec succées !");
}
catch(err){
    console.log(err);
}
},

updateTchnicien: async(req,res)=>{
    try{
        await Technicien.findByIdAndUpdate({_id:req.params.id},
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
},

deleteTechnicien: async(req, res)=>{
try{
await Technicien.findOneAndDelete({ _id: req.params.id });
res.send('supprimé avec succées...!');
    } 
catch(err){
res.send(err);
    }    
}

}