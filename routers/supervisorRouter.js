const supervisorController = require('../controllers/SupervisorController');
const express=require('express');
const route= express.Router();



route.get('/show_sup',supervisorController.getSupervisor);
route.post('/add_sup',supervisorController.addSupervisor);
route.put('/update_sup/:id',supervisorController.updateSupervisor);
route.delete('/delete_sup/:id',supervisorController.deleteSupervisor);



module.exports=route;