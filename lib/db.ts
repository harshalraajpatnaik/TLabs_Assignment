import {Client} from 'pg'

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'password',
    port: 5432,
});

const makeDepartmentDb = () => {
    const query = `
    CREATE TABLE depertments (
        id varchar,
        name varchar
    );`

    client.query(query, (err, res) => {
        if (err) throw err

        console.log('Successfull')
    })
}

const createemployeeDb = () => {
    const query = `
    CREATE TABLE Employee (
    id varchar,
    firstName varchar,
    lastName varchar,
    age int,
    departmentName varchar
);`

    client.query(query,(err, res) => {
        if (err) throw err

        console.log('Successfull')
    })
}

const dbConnect = (cb:()=>void) => {
    client.connect();

    // Make Databases
    // makeDepartmentDb()
    // createemployeeDb()

    cb()
}

export {
    dbConnect,
    client
}