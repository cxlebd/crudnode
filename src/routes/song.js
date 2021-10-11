const express = require('express');
const router = express.Router();

const songController = require('../controllers/songController');

router.get('/', songController.list);
router.post('/add', songController.save);
router.get('/delete/:id', songController.delete);

router.get('/update/:id', songController.edit);
router.post('/update/:id', songController.update);

module.exports = router;