import { useSelector } from "react-redux";

const Output=()=>{

    const name = useSelector((state)=>state.name)
    const password = useSelector((state)=>state.password)
    
    return (
    <div>
        <div className="input-container">
        <div className="username">
            <div className="name">
                 {name}
            </div>
        </div>
        <div className="password">
            <div className="passout">
               {password}
            </div>
        </div>
        </div>
    </div>
    )
}

export default Output;