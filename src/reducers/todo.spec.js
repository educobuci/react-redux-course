import reducer from './todo';

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
  });
  test('add a todo', () => {
    const startState = {
      todos: [
        {id: 1, name: 'Learn React', isComplete: true},
        {id: 2, name: 'Learn Redux', isComplete: true}
      ]
    };
    const expectedState = {
      todos: [
        {id: 1, name: 'Learn React', isComplete: true},
        {id: 2, name: 'Learn Redux', isComplete: true},
        {id: 3, name: 'Profit', isComplete: false}
      ]
    };
    const action = {type: 'TODO_ADD', payload: {id: 3, name: 'Profit', isComplete: false}};
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
