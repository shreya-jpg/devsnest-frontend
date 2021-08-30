const TodoReducer = (state = [], action) => {
    switch (action.type) {
      case "TODO_ADD":
        return [...state, action.payload];
  
      case "TODO_DELETE":
        return state.filter((item, index) => index !== action.payload);
  
      case "TODO_DONE":
        // return [...state, (state[action.payload.index] = action.payload)];
  
        var newState = [...state];
        newState[action.payload.index] = action.payload;
        return newState;
  
      default:
        return state;
    }
  };
  
  export default TodoReducer;