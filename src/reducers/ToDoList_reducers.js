const ToDoList = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log(action.text);
      return [...state,
        {
          key: Math.random(),
          text: action.text
       }]
    case 'REMOVE_TODO':
      return state
    default:
      return state
  }
}

export default ToDoList
