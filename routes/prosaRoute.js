const express = require('express')
const router = express.Router()
const prosaController = require('../controller/prosaController')

router.get('/', prosaController.home);
router.get('/contrate', prosaController.contrate);
router.get('/login', prosaController.login);
router.get('/formulario-festa', prosaController.festa);
router.get('/formulario-condominio', prosaController.condo)
router.get('/homestaff', prosaController.homestaff)
router.get('/cadastrostaff', prosaController.cadastrostaff )


module.exports = router