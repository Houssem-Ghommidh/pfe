const technicienController = require('../controllers/technicienController');
const express=require('express');
const route= express.Router();



route.get('/show_technicien',technicienController.getTechnicien);
route.post('/add_technicien',technicienController.addTechnicien);
route.put('/update_technicien/:id',technicienController.updateTchnicien);
route.delete('/delete_technicien/:id',technicienController.deleteTechnicien);



module.exports=route;