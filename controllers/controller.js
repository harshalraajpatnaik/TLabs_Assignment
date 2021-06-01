const { client } = require('../lib/db')
const model = require('../model/model')

// console.log(db)
exports.getHomePage = async (req, res) => {

    const query = `
    SELECT * FROM depertments ORDER BY name ASC;
    `

    try {
        await client.query(query, async(err, result) => {
            if (err) {
                console.log(err)
                throw new Error(err)
            }

            const reqQur = `
            SELECT * FROM Employee ORDER BY firstName ASC;
            `
            await client.query(reqQur, (err, empres)=>{
                if (err) {
                    console.log(err)
                    throw new Error(err)
                }

                res.render('home', {
                    departments: result.rows ? result.rows : [],
                    employees: empres.rows? empres.rows:[]
                })
            })

        })


    } catch (error) {
        return false
    }
}

exports.getManageDepartment = (req, res) => {
    res.render('manageDepartment')
}

exports.getEditEmployeePage = (req, res)=>{
    const {firstname, lastname, age, department, id} = req.query
    res.render('editEmploye', {
        firstname, lastname, age, department, id
    })
}



exports.creteEmploye = (req, res) => {
    res.render('createEmploye')
}

exports.getEditDepartmentPage = (req, res) => {
    const { id, name } = req.query

    res.render('editDepartment', {
        id, name
    })
}

exports.createDepartment = async (req, res) => {

    const { name } = req.body
    const uniqid = Date.now()

    const result = await model.createDepartment({ name, uniqid })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}


exports.editDepartment = async (req, res) => {
    const { name, id } = req.body

    const result = await model.editDepartment({ name, id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

exports.deleteDepartment = async (req, res) => {
    const { id } = req.body

    const result = await model.deleteDepartment({ id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

exports.createEmployee = async (req, res) => {

    const { firstName, lastName, age, department } = req.body
    const uniqid = Date.now()

    const result = await model.createEmployee({ firstName, lastName, age, department, uniqid })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}


exports.editEmployee = async (req, res)=>{
    
    const {id, firstName, lastName, age, department} = req.body

    const result = await model.editEmployee({id, firstName, lastName, age, department})
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

exports.deleteEmployee = async (req, res)=>{
    
    const {id} = req.body

    const result = await model.deleteEmployee({ id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}