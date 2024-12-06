import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

function InfoBox({info}) {
 let summerUrl =
   "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600";
 let coldUrl =
   "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

 let rainUrl =
   "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="InfoBox">
      
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={(info.humidity > 80) ? rainUrl : (info.temperature < 15) ? coldUrl : summerUrl }
              alt="weather Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} 
                
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <p>Temperature = {info.temperature}&deg;C</p>
                <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>
                  Feels Like it is {info.feelsLike}&deg;C and weather is{" "} 
                  {info.weather}
                </p>
               
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
