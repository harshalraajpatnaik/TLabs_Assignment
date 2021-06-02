import {client} from '../lib/db'

exports.createDepartment = ({name, uniqid})=>{
    const mutation = `
    INSERT INTO depertments(id,name) 
    VALUES('${uniqid}', '${name}');
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in DB')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}

exports.editDepartment = ({name, id})=>{
    const mutation = `
    UPDATE depertments
    SET name= '${name}' 
    WHERE id='${id}';
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in DB')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}

exports.deleteDepartment = ({id})=>{
    const mutation = `
    DELETE FROM depertments
    WHERE id='${id}';
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in db')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}

exports.deleteEmployee = ({id})=>{
    const mutation = `
    DELETE FROM Employee
    WHERE id='${id}';
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in db')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}

exports.createEmployee = ({firstName, lastName, age, department, uniqid})=>{
    const mutation = `
    INSERT INTO Employee(id, firstname, lastname, age, departmentname) 
    VALUES('${uniqid}', '${firstName}', '${lastName}', '${age}', '${department}');
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in db')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}


exports.editEmployee = ({id, firstName, lastName, age, department})=>{
    const mutation = `
    UPDATE Employee
    SET firstname= '${firstName}',
        lastname= '${lastName}',
        age='${age}',
        departmentname= '${department}' 
    WHERE id='${id}';
    `
    try {
        client.query(mutation,(err, res) => {
            if (err) {
                console.log(err)
                throw new Error('Error mutating in db')
            }
        })
        return true
        
    } catch (error) {
        return false
    }
}