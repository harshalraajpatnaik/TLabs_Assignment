const form = document.querySelector('#form')

form.addEventListener('submit', async e=>{

    e.preventDefault()

    // Get the field values
    const departmentInput = form.querySelector('input').value
    
    if(
        departmentInput.trim()==''||
        departmentInput.includes('<'||'>'||'/')
    ){
        return
    }

    const result = await fetch('/createDepartment', {
        method: 'POST',
        body: JSON.stringify({
            name: departmentInput
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })

   const data = await result.json()
    console.log(data)
})