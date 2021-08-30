import { useState } from 'react';
import './App.css';
import {Sample} from './Main';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';

function App() {
  const [val, setVal, add, clear] = Sample(["item1", "item2", "item3"]);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h2 style={{fontSize: "2rem"}}>Task List</h2>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{padding: 30}}>
          <TextField 
            style={{
                  marginTop:10,
                  marginRight: 25
              }}
            variant="outlined" 
            id="outlined-basic" 
            label="Add Item" 
            size="small" 
            type="text" 
            placeholder="Add Item" 
            value={text} 
            onChange={(e) => {setText(e.target.value)}} 
          />
          <Button
              style={{
                  marginTop:10,
                  fontSize: 16
              }}
              size="medium"
              variant="contained"
              color="primary"
              onClick={() => {add(text); setText('')}}>Add</Button>
          <ul>
            {val.map((item, idx) => (
              <li 
                key={idx}>{item}
                <BackspaceIcon 
                  style={{fontSize: 25}}
                  onClick={() => {
                  const newItems = val.filter((item, i) => i !== idx);
                  setVal(newItems);
                }}>Delete</BackspaceIcon>
              </li>
            ))}
        </ul>
        <Button
              style={{
                  marginTop:10,
                  fontSize: 16
              }}
              size="medium"
              variant="contained"
              color="secondary"
              onClick={() => {clear()}}>Clear</Button>
        </Paper>
      </Container>
    </div>
    
  );
}

export default App;