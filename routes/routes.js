const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


// Route index
router.get('/', Controller.index);

// Route Input data baru
router.get('/create', Controller.create);

// Route Store data
router.post('/', Controller.store);

// Route Get id Untuk di edit
router.get('/:id/edit', Controller.edit);

// Route Update Data
router.put('/:id', Controller.update);

// Route Delete Data
router.delete('/:id', Controller.destroy);

module.exports = router;