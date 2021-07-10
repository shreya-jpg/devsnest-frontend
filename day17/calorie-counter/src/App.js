import './App.css';
import Item from "./Card"
function App() {

  return (
    <div className="app">
      <h1>Calorie Read Only</h1>
      <Item name ="Pizza" cal ="56"/>
      <Item name ="Burger" cal = "76"/>
      <Item name ="Coke" cal = "20"/>
      <Item name ="Egg Cheese Chowmine" cal = "30"/>
      <Item name ="Lassania" cal = "56"/>

    </div>
  );
}

export default App;