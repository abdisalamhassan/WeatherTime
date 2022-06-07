let weather = {
    "apiKey": "d8b9c9f29acf75b9bc89cdc565bacf19",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +  "&units=metric&appid=" 
            + this.apiKey
            )
            
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data){
        const{ name } = data;
        const {icon,description} = data.weather
    }
}