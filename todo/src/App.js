import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/starterStuff";
import Todo from './components/todo'
import NewTodoForm from './components/newTodoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <NewTodoForm dispatch = {dispatch}/>
      {state.map( todoData => {
      return <Todo dispatch = {dispatch} todoData = {todoData} key = {todoData.id}/>
      })}
      
      <button 
       onClick = {()=> { 
        dispatch({type: "CLEAR_COMPLETE"})
        console.log(state)
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
