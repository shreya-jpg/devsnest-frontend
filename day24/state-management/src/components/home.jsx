const Home = (props)=>{

    function toLogIn()
    {
        props.setLoading("Loading...");
        setTimeout(()=>{
             props.setLogin("loggedIn");
             props.setLoading("");
        },1000)
    }

    function toLogOut()
    {
        props.setLoading("Loading...");
        setTimeout(()=>{
             props.setLogin("notLoggedIn");
             props.setLoading("");
        },1000)
    }

    return<div className="home page-container">
        <div className="title">
        HOME
        </div>
        <div className="content">
            If not logged in cant access, Profile & Dashboard
        </div>
        <div className="btn">
            {
            props.loading===""?
            (
            props.login==="loggedIn"?
            (
            <button onClick={toLogOut}>Logout</button>
            )
            :
            (
            <button onClick={toLogIn}>Login</button>
            )
            ):("")}
        </div>
        {
        props.loading==="Loading..."?
        <div className="progress-bar"><div class="loader-5 center"><span></span></div></div>
        :
        <></>
        }
    </div>
}

export default Home;