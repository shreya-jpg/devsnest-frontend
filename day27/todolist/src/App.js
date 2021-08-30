import Form from "./components/form";
import Todos from "./components/todos";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;