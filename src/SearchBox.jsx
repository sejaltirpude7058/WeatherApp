import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Alert from '@mui/material/Alert';
import { useState } from "react";
import "./SearchBox.css";

function SearchBox({ updateWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "e193cace0c81e66da4afaae22a9c0062";

  let getWeather = async () => {
    try{
        let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let data = await response.json();
    // console.log(data);
    let result = {
      city: city,
      temperature: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(error){
        throw new Error("No exist such place info in API");
        
    }
  };

  let handleCity = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
        event.preventDefault();
        console.log("form was submited");
        console.log(city);
        setCity("");
        let newInfo = await getWeather();
        updateWeatherInfo(newInfo);
    } catch (error) {
        setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <p>Search City</p>
      <form onSubmit={handleSubmit}>
        <TextField
        className="input-field"
           style={{width: "250px", backgroundColor: "#fff"}}
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleCity}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
          id="searchBtn"
          name="searchCity"
        >
          Search
        </Button>
      </form>

      {error && <Alert severity="error" style={{marginTop : "20px",marginLeft : "36%", color: "red", width: "25%"}}>No Such place Exists!</Alert>}
    </div>
  );
}

export default SearchBox;
