const ToDoList = (state = [], action) => {


  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return [...state,
        {
          id: Math.random,
          text: action.text
       }]
    default:
      return state
  }



}

export default ToDoList
