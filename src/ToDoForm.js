import React, { useState } from 'react'

const ToDoForm = ({addToDo}) => {
    const [userInput,setUserInput]=useState('');

    const handleChange = (e) =>{
        console.log(e.currentTarget.value);
        setUserInput(e.currentTarget.value);
    }

    const handleClick = () =>{
        console.log(userInput);
        addToDo(userInput);
        setUserInput('');
    }
    
    return (<div>
        <input value={userInput} placeholder='Enter todo value' onChange={handleChange}/>
        <button style={{margin: '15px'}} onClick={handleClick}>Add</button>
    </div>);
}
 
export default ToDoForm;