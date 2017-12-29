import { delay } from 'redux-saga'
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

function apiGet(text){
  console.log("apiGet");
   return new Promise((resolve,reject)=>{
     console.log("Promise");
     setTimeout(()=>{
       resolve(text + "Aqui Entrou ")
     },2000)
   })
}


function* asyncAddTodo(action){
  try {
    const response = yield call(apiGet,action.text)
    console.log(response);
    yield put({ type:"ADD_TODO", text:response})
  } catch (e) {

  }

}

export default function* root(){
  yield[
    takeEvery('ASYNC_ADD_TODO',asyncAddTodo),
  ];
}
