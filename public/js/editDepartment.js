const form = document.querySelector('#form')

form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    // Get the field values
    const departmentInput = form.querySelector('input').value
    const id = form.getAttribute('data-id')
    
    if(
        departmentInput.trim()==''||
        departmentInput.includes('<'||'>'||'/')
    ){
        return
    }
    
    try {
        const result = await fetch('/editDepartment', {
            method: 'PUT',
            body: JSON.stringify({
                name: departmentInput,
                id
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
    
        await result.json()
        window.location.href='/'
        
    } catch (error) {
        // Do nothing
    }
})

const delBtn = form.querySelector('#del-btn')
delBtn.addEventListener('click', async e=>{

    const id = form.getAttribute('data-id')
    try {
        const result = await fetch('/deleteDepartment', {
            method: 'DELETE',
            body: JSON.stringify({
                id
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
    
        await result.json()
        window.location.href='/'
        
    } catch (error) {
        // Do nothing
    }
})