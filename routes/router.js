const express  = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router.get('/', controller.getHomePage)

router.get('/manageDepartment', controller.getManageDepartment)

router.get('/editDepartment', controller.getEditDepartmentPage)

router.get('/createEmploye', controller.creteEmploye)

router.get('/editEmploye', controller.getEditEmployeePage)

// POST Routes
router.post('/createDepartment', controller.createDepartment)

router.put('/editDepartment', controller.editDepartment)

router.put('/editEmployee', controller.editEmployee)

router.delete('/deleteDepartment', controller.deleteDepartment)
router.delete('/deleteEmployee', controller.deleteEmployee)

router.post('/createEmployee', controller.createEmployee)

module.exports = router
