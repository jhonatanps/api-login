const { Router } = require('express');
const router = Router();
const loginController = require('../controllers/login')


router.get('/:login', loginController);

module.exports = router;