import { useState } from "react";
import {useDispatch} from "react-redux"
import { TodoActionAdd } from "../reducer/todoAction";

const Form = ()=>{

    const dispatch = useDispatch();
    const [item,setItem]=useState("");

    return <div className="form-container">
        <div className="form">
            <div className="inpt">
                <input placeholder="Add TODO" onChange={(e)=>{setItem(e.target.value)}} value={item}></input>
            </div>
            <div className="btn">
                <button onClick={()=>{setItem("");
                if(item){
                    dispatch(TodoActionAdd({
                        title:item,
                        done:false
                    }))
                }}}>ADD</button>
            </div>
        </div>
    </div>
}

export default Form;