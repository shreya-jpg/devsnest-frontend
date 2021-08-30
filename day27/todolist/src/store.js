import TodoReducer from "./reducer/todoReducer";
import { createStore } from "redux";

const store = createStore(TodoReducer);

export default store;