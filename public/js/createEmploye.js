const form = document.querySelector('#form')

form.addEventListener('submit', async e=>{

    e.preventDefault()

    // Get the field values
    const firstName = form.querySelector('#firstname').value
    const lastName = form.querySelector('#lastname').value
    const age = form.querySelector('#age').value
    const department = form.querySelector('#department').value
    
    if(
        firstName.trim()==''||
        firstName.includes('<'||'>'||'/')||
        lastName.trim()==''||
        lastName.includes('<'||'>'||'/')||
        department.trim()==''||
        department.includes('<'||'>'||'/')
    ){
        console.log('Error validation')
        return
    }

    const result = await fetch('/createEmployee', {
        method: 'POST',
        body: JSON.stringify({
            firstName, lastName, age, department
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })

   const data = await result.json()
    console.log(data)
})