export function addToDo(text) {
  console.log(text);
  return {
    type:'ADD_TODO',
    text: text,
  }
}

export function fetchToDo(text) {
  console.log("FETCH");
  return {
    type:'ASYNC_ADD_TODO',
    text: text,
  }
}
