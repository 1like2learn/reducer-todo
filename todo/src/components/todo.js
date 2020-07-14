import React from 'react';

export default function Todo(props) {
  const { dispatch, todoData } = props

  return(
    <div>
      <h3 
      style={todoData.completed? {textDecoration: "line-through"}:{textDecoration: "none"}}
      onClick={ ()=>{dispatch({ type: "TOGGLE_COMPLETE", payload: todoData.id })}}
      >{todoData.item}</h3>
    </div>
  )
}