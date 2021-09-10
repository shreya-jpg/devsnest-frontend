import React, {useEffect} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import {useDispatch, useSelector} from "react-redux";
import {User, updateUser} from "./actions"


function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;


