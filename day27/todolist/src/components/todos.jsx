import { useSelector } from "react-redux"
import {TodoActionDelete} from "../reducer/todoAction"
import { TodoActionDone } from "../reducer/todoAction"
import { useDispatch } from "react-redux"

const Todos=()=>{
    const todo = useSelector((state)=>state)
    console.log(todo)
    const dispatch = useDispatch();

    return <div className="todos">
        {
            todo.map((item,index)=>{return(
            <div key={index} className="todo-card">
            <div className="doneBtn">
                {(item.done===true)?
                <button onClick={()=>dispatch(TodoActionDone({title:item.title,done:false,index:index}))}>UnDone</button>:
                <button onClick={()=>dispatch(TodoActionDone({title:item.title,done:true,index:index}))}>Done</button>
            }
            </div>
            <div className="content">
                {(item.done===true)?<div style={{textDecoration:'line-through',color:'gray'}}>{item.title}</div>:
                <div style={{textDecoration:'none',color:'black'}}>{item.title}</div>}
            </div>
            <div className="delBtn">
                <button onClick={()=>{dispatch(TodoActionDelete(index))}}>Delete</button>
            </div>
        </div>)
            })
        }
    </div>
}

export default Todos