const express = require('express');
const router = express.Router();
const filtroController = require('../controllers/filtroController');

router.get('/',filtroController.index);
router.post('/',filtroController.store);
module.exports = router;