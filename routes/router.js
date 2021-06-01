const express  = require('express')
const controller = require('../controllers/controller')
const {auth, restAuth} = require('../middleware/auth')

const router = express.Router()

router.get('/',  controller.getHomePage)

router.get('/login', controller.getLoginPage)

router.get('/manageDepartment', auth, controller.getManageDepartment)

router.get('/editDepartment', auth, controller.getEditDepartmentPage)

router.get('/createEmploye', auth, controller.creteEmploye)

router.get('/editEmploye', auth, controller.getEditEmployeePage)

// POST Routes
router.post('/createDepartment', restAuth, controller.createDepartment)

router.put('/editDepartment', restAuth, controller.editDepartment)

router.put('/editEmployee', restAuth, controller.editEmployee)

router.delete('/deleteDepartment', restAuth, controller.deleteDepartment)
router.delete('/deleteEmployee', restAuth, controller.deleteEmployee)

router.post('/createEmployee', restAuth, controller.createEmployee)


// Auth Route
router.post('/login', controller.login)
router.get('/logout', controller.logout)

module.exports = router
