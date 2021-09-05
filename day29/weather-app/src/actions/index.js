const updatePlace =(place)=>{
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData=(place)=>{
    return(dispatch)=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=8b2c463083684588931130154210509&q=${place}`)
    .then((res)=> res.json())
    .then((data)=>{
    dispatch({
        type: "UPDATE_PLACE_DATA",
        payload: data,
       });
    }); 
    };
};


const toggleTheme=()=>{
    return {
        type: "TOGGLE_THEME",
    };
};

export {updatePlace,updatePlaceData,toggleTheme};