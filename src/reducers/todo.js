const initState = {
  todos: [
    {id: 1, name: 'Learn React', isComplete: true},
    {id: 2, name: 'Learn Redux', isComplete: true},
    {id: 3, name: 'Profit', isComplete: false}
  ],
  currentTodo: ''
};

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value});

export default (state = initState, action) => {
  switch(action.type) {
    case TODO_ADD:
      return {...state,
        todos: state.todos.concat(action.payload)
      };
    case CURRENT_UPDATE:
      return {...state, currentTodo:action.payload};
    default:
      return state;
  }
};