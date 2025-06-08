const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain')

router.get('/', controller.getMain);

router.post('/', controller.postMain);

router.get('/:id', controller.getId)

module.exports = router;