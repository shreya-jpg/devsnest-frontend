import CardReducer from "./redux/cardReducer";
import { createStore } from "redux";

const store = createStore(CardReducer);

export default store;