export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 0
  },
  {
    item: 'Invent time travel',
    completed: false,
    id: 1
  },
  {
    item: 'Discover alien life',
    completed: false,
    id: 2
  },
  {
    item: 'Meditate on the lily',
    completed: false,
    id: 3
  },
  {
    item: 'Win Stuff',
    completed: false,
    id: 4
  }
];

export const reducer = ( state, action ) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item:action.payload,
          completed: false,
          id: new Date()
        }
      ];
      case 'TOGGLE_COMPLETE':
      const toggledTodo = state.findIndex((state) => state.id === action.payload);
      const newState = Array.from(state)
      newState[toggledTodo].completed = !state[toggledTodo].completed;
      console.log('newState', newState);
      return newState
    case 'CLEAR_COMPLETE':
      return state.filter( todo => !todo.completed)
    default:
      return state;
  }
};