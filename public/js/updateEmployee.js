const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    // Get the field values
    const firstName = form.querySelector('#firstname').value
    const lastName = form.querySelector('#lastname').value
    const age = form.querySelector('#age').value
    const department = form.querySelector('#department').value
    const id = form.getAttribute('data-id')

    if (
        firstName.trim() == '' ||
        firstName.includes('<' || '>' || '/') ||
        lastName.trim() == '' ||
        lastName.includes('<' || '>' || '/') ||
        department.trim() == '' ||
        department.includes('<' || '>' || '/')
    ) {
        console.log('Error validation')
        return
    }

    
    try {
        const result = await fetch('/editEmployee', {
            method: 'PUT',
            body: JSON.stringify({
                id,firstName, lastName, age, department
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log('break')
        
        
        await result.json()
        window.location.href='/'

    } catch (error) {
        // Do nothing
    }
})

const delBtn = form.querySelector('#del-btn')
delBtn.addEventListener('click', async e => {

    const id = form.getAttribute('data-id')
    try {
        const result = await fetch('/deleteEmployee', {
            method: 'DELETE',
            body: JSON.stringify({
                id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        await result.json()
        window.location.href = '/'

    } catch (error) {
        // Do nothing
    }
})