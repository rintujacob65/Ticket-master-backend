const express = require('express')
const router = express.Router()
const customersController = require('../app/controllers/customersController')
const departmentsController = require('../app/controllers/departmentsController')
const employeesController = require('../app/controllers/employeesController')
const ticketsController = require('../app/controllers/ticketsController')

router.get('/customers', customersController.list)
router.post('/customers', customersController.create)
router.get('/customers/:id', customersController.show)
router.put('/customers/:id', customersController.update)
router.delete('/customers/:id', customersController.destroy)

router.get('/departments', departmentsController.list)
router.post('/departments', departmentsController.create)
router.get('/departments/:id', departmentsController.show)
router.put('/departments/:id', departmentsController.update)
router.delete('/departments/:id', departmentsController.destroy)

router.get('/employees', employeesController.list)
router.post('/employees', employeesController.create)
router.get('/employees/:id', employeesController.show)
router.put('/employees/:id', employeesController.update)
router.delete('/employees/:id', employeesController.destroy)

router.get('/tickets', ticketsController.list)
router.post('/tickets', ticketsController.create)
router.get('/tickets/:id', ticketsController.show)
router.put('/tickets/:id', ticketsController.update)
router.delete('/tickets/:id', ticketsController.destroy)



module.exports = router
