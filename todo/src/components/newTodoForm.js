import React, { useState } from 'react'

export default function NewTodoForm(props) {
  const [newTodo, setNewTodo] = useState("");
  const { dispatch } = props

  const handleChanges = (event) => {
    setNewTodo(event.target.value)
  }

  return(
    <div>
      <label>Todo
        <input
          name='item'
          value={newTodo}
          onChange={handleChanges}
        ></input>
      </label>
      <button onClick={()=> { 
        dispatch({type: "ADD_TODO", payload: newTodo})
        setNewTodo("")
      }}>
        Add Todo
      </button>
    </div>
  )
}