export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Invent time travel',
    completed: false,
    id: 3892982589
  },
  {
    item: 'Discover alien life',
    completed: false,
    id: 3832987589
  },
  {
    item: 'Meditate on the lily',
    completed: false,
    id: 3892187589
  },
  {
    item: 'Win existence',
    completed: false,
    id: 3792987589
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
      const toggledTodo = state.findIndex((state) => state.id == action.payload);
      state[toggledTodo].completed = !state[toggledTodo].completed;
      console.log('state', state)
      return state
    case 'CLEAR_COMPLETE':
      return [

      ];
    default:
      return state;
  }
};