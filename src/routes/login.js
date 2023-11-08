const { Router } = require('express');
const router = Router();
const loginController = require('../controllers/login');
const loginValidation = require('../validation/login');

router.get('/',loginValidation, loginController);

module.exports = router;
