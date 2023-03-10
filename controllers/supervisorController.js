const Supervisor = require('../models/supervisor')



module.exports={
getSupervisor: async(req, res) => {
    try{
await Supervisor.find({})
    .then(result=>{
        res.send(result)
    })
}
    catch(err){
    console.log(err);
    }
     
},




addSupervisor: async (req, res) => {
    try {
    let new_supervisor = new Supervisor({
        cin: req.body.cin,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        numtel: req.body.numtel,
    });

    await new_supervisor.save();
    res.send("save effectué avec succées !");
}
catch(err){
    console.log(err);
}
},



deleteSupervisor: async(req, res)=>{
try{
await Supervisor.findOneAndDelete({ _id: req.params.id });
res.send('supprimé avec succées...!');
    } 
catch(err){
res.send(err);
    }    
},




updateSupervisor: async(req,res)=>{
    try{
        await Supervisor.findByIdAndUpdate({_id:req.params.id},
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