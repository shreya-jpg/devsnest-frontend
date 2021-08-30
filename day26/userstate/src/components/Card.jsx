import { useState } from "react";
import { useDispatch } from "react-redux";
import { cardActionPassword,cardActionName } from "../redux/cardAction";

const Card=()=>{
    
    // const [name,setName]=useState('')
    // const [password,setPassword]=useState('')
    const dispatch = useDispatch();

    return (
    <div>
        <div className="input-container">
        <div className="username">
            <label>UserName</label>
            <input type="text" placeholder="User Name" onChange={(e)=>(dispatch(cardActionName(e.target.value)))} ></input>
        </div>
        <div className="password">
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={(e)=>(dispatch(cardActionPassword(e.target.value)))} ></input>
        </div>
        </div>
    </div>
    )
}

export default Card;