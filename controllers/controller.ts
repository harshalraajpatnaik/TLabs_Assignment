import {client} from '../lib/db'
import {Request, Response} from 'express'
import fs from 'fs'
import path from 'path'
import bcrypt from 'bcrypt'

const jwt = require('jsonwebtoken')
const model = require('../model/model')

// console.log(db)
export const getHomePage = async (req:Request, res:Response) => {

    const query = `
    SELECT * FROM depertments ORDER BY name ASC;
    `

    try {
        await client.query(query, async(err, result) => {
            if (err) {
                console.log(err)
                throw new Error('Error occoured')
            }

            const reqQur = `
            SELECT * FROM Employee ORDER BY firstName ASC;
            `
            await client.query(reqQur, (err, empres)=>{
                if (err) {
                    console.log(err)
                    throw new Error('Error occoured')
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

export const getManageDepartment = (req:Request, res:Response) => {
    res.render('manageDepartment')
}

export const getEditEmployeePage = (req:Request, res:Response)=>{
    const {firstname, lastname, age, department, id} = req.query
    res.render('editEmploye', {
        firstname, lastname, age, department, id
    })
}

export const getLoginPage =(req:Request, res:Response)=>{
    res.render('login')
}


export const creteEmploye = (req:Request, res:Response) => {
    res.render('createEmploye')
}

export const getEditDepartmentPage = (req:Request, res:Response) => {
    const { id, name } = req.query

    res.render('editDepartment', {
        id, name
    })
}

export const createDepartment = async (req:Request, res:Response) => {

    const { name } = req.body
    const uniqid = Date.now()

    const result = await model.createDepartment({ name, uniqid })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}


export const editDepartment = async (req:Request, res:Response) => {
    const { name, id } = req.body

    const result = await model.editDepartment({ name, id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

export const deleteDepartment = async (req:Request, res:Response) => {
    const { id } = req.body

    const result = await model.deleteDepartment({ id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

export const createEmployee = async (req:Request, res:Response) => {

    const { firstName, lastName, age, department } = req.body
    const uniqid = Date.now()

    const result = await model.createEmployee({ firstName, lastName, age, department, uniqid })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}


export const editEmployee = async (req:Request, res:Response)=>{
    
    const {id, firstName, lastName, age, department} = req.body

    const result = await model.editEmployee({id, firstName, lastName, age, department})
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}

export const deleteEmployee = async (req:Request, res:Response)=>{
    
    const {id} = req.body

    const result = await model.deleteEmployee({ id })
    if (!result) {
        res.status(500).json('Internal server error')
        return
    }

    res.json('success')
}



// AuthRoutes

export const login = (req:Request, res:Response)=>{
    const {username, password} = req.body

    // const hashPassword = bcrypt.hashSync(password, 12)
    const usersPath = path.join(process.cwd(), 'data', 'users.json')

    const usersData = fs.readFileSync(usersPath, 'utf-8')
    const data = JSON.parse(usersData)
    const comparePassword = bcrypt.compareSync(password, data.password)

    if(username != data.username && comparePassword){
        res.redirect('/login')
        return
    }
    
    const token = jwt.sign({
        username
    }, 'mySecret')


    res.cookie('token', token, {httpOnly:true})

    res.redirect('/')
}

export const logout = (req:Request, res:Response)=>{
    res.clearCookie('token');
    res.redirect('/')
}