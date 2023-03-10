const adminController=require('../controllers/adminController');
const express=require('express');


const route= express.Router();

route.get('/show_admin',adminController.getAdmin);
route.post('/add_admin',adminController.addAdmin);
route.put('/update_admin/:id',adminController.updateAdmin);
route.delete('/delete_admin/:id',adminController.deleteAdmin);

module.exports=route;