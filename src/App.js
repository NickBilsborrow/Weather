import './App.css';
import{useState,} from "react"


const App =() =>{
  const API_key = process.env.REACT_APP_WEATHER_API_KEY
    const [data,setdata]= useState("");
  const [error,seterror]= useState({error:false, message:""})
  const[city,setcity]=useState("")
  
  
  const handleFetch = async(place) =>{
    console.log(`${place}`)
    try{
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${place}, uk&appid=${API_key} `);
    console.log(response)
    if(response.status !== 200){
            throw new error("oops!");
    }
    
    const data = await response.json();
    console.log(`555 ${data}`)
    setdata(data);
    }catch (error){
      console.log(error)
      seterror({error:true,message:error.message})
    }
  };

  if(error.error){
    return <h1> error occured:{error.message}</h1>
  }else if(data !==""){
<div>
    <h1>Weather App</h1>
    <input type="text" onChange={event => setcity(event.target.value)} />
    <button onClick={handleFetch(city)}>Click</button>
    <p>Weather: {data.weather.main}</p>
    <p>Temp: {data.main.temp- 273.15}</p>
    <p>Humidity: {data.main.humidity}</p>
  </div> 

  }
  return(
  <div>
    <h1>Weather App</h1>
    <input  onChange={event => setcity(event.target.value)} />
    <button onClick={()=>{handleFetch(city)}}>Click</button>
    
    </div> 
  )
  
}




export default App;
