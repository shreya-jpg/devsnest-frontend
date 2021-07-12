import "./App.css";
import Button from "./components/Button";
function App(){
  return(
    <div className="App">
      <div className="heading">
          Managing State
        </div>
        <div className="buttons">
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </div>
    </div>  
  );
}

export default App;