import React from 'react';
import Todo from './Todo';
import Error from './Error';

const TodoList = ({todolistData, handleToggle,handleFilter}) => {
    console.log(todolistData);
    return ( <div>
            {todolistData.length>0 ? 
                todolistData.map((todo,index) => {
                return (
                    <Todo todo={todo} key={index} handleToggle={handleToggle}/>
                )
            }) : <Error/> }
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div> );
}
 
export default TodoList;