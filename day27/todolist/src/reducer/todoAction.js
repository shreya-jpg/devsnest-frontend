const TodoActionAdd = (item) => {
    return {
      type: "TODO_ADD",
      payload: item,
    };
  };
  
  const TodoActionDone = (id) => {
    return {
      type: "TODO_DONE",
      payload: id,
    };
  };
  
  const TodoActionDelete = (item) => {
    return {
      type: "TODO_DELETE",
      payload: item,
    };
  };
  
  export { TodoActionAdd, TodoActionDone, TodoActionDelete };