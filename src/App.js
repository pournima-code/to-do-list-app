import React,{ useEffect, useState } from 'react';
import data from "./data.json";
import './App.css';

import Header from './Header';
import TodoList from './TodoList';
import ToDoForm from './ToDoForm';

function App() {
  const [ todolistData, setTodolistData]= useState(null);

  useEffect(()=>{setTodolistData(data)},[]);

  const handleToggle = (id) => {
    let mapped = todolistData.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodolistData(mapped);
  }

  const handleFilter = () => {
    let mapped = todolistData.filter(task => {
      return task.complete === false ;
    });
    setTodolistData(mapped);
  }

  const addToDo = (newTodo) => {
    let mapped = [...todolistData, {id:todolistData.length+1,task:newTodo,complete:false}];
    setTodolistData(mapped);
  }

  return (
    <div className="App">
      <Header/>
      {todolistData && <TodoList todolistData={todolistData} handleToggle={handleToggle} handleFilter={handleFilter}/>}
      <ToDoForm addToDo={addToDo}/>
    </div>
  );
}

export default App;
