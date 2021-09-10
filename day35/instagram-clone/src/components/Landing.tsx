import React from "react";
import { useSelector } from "react-redux";
const Landing = () => {
    const user = useSelector((state:any) => state.user);
    return(
        <div className="container landing">
            <div className="row">
                <div className="col-8">
                    <div className="card story">
                        {[...Array(15)].map((_, i) => (
                            <div className="story-img">
                              <img src={user.profilePicture} alt="" />
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
};
export default Landing;