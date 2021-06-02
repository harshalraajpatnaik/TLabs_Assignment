import {client} from '../lib/db'

exports.createDepartment = (arg: {name:string, uniqid: string})=>{
    const mutation = `
    INSERT INTO depertments(id,name) 
    VALUES('${arg.uniqid}', '${arg.name}');
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

exports.editDepartment = (arg:{name:string, id:string})=>{
    const mutation = `
    UPDATE depertments
    SET name= '${arg.name}' 
    WHERE id='${arg.id}';
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

exports.deleteDepartment = (arg:{id:string})=>{
    const {id} = arg
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

exports.deleteEmployee = (arg:{id:string})=>{
    const mutation = `
    DELETE FROM Employee
    WHERE id='${arg.id}';
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

exports.createEmployee = (arg:{firstName: string, lastName: string, age: string, department: string, uniqid: string})=>{
    const mutation = `
    INSERT INTO Employee(id, firstname, lastname, age, departmentname) 
    VALUES('${arg.uniqid}', '${arg.firstName}', '${arg.lastName}', '${arg.age}', '${arg.department}');
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


exports.editEmployee = (arg:{id: string, firstName: string, lastName: string, age: string, department: string})=>{
    const mutation = `
    UPDATE Employee
    SET firstname= '${arg.firstName}',
        lastname= '${arg.lastName}',
        age='${arg.age}',
        departmentname= '${arg.department}' 
    WHERE id='${arg.id}';
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