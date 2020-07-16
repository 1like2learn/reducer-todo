import React from 'react';

export default function Todo(props) {
  const { dispatch, todoData } = props
  // const [ marked, setMarked ] = useState(todoData.completed)

  return(
    <div>
      <h3 
      style={todoData.completed? {textDecoration: "line-through"}:{textDecoration: "none"}}
      onClick={ 
        ()=>dispatch({
          type: "TOGGLE_COMPLETE",
          payload: todoData.id 
        })}
      >{todoData.item}</h3>
    </div>
  )
}