import React, { useState } from 'react'
import { useInput } from '../hooks/useInput'

export const UserForm = () => {
    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')

    const submitHandle=e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <form onSubmit={submitHandle}>
            <div>
                <label>First Name</label>
                <input type='text' {...bindFirstName}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' {...bindLastName}/>
            </div>
            <button>Submit</button>
        </form>
    )
}
