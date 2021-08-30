import Card from "./components/Card";
import Output from "./components/Output";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Card />
        <Output />
      </Provider>
    </div>
  );
}

export default App;