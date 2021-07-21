$(document).ready(function () {

    var currentWeatherKey = "a2f3ec0bbd04ecbee60efbaafff7a5b2"
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&appid=" + currentWeatherKey;

    //Ajax request
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&appid=" + currentWeatherKey,
        method:"GET"
    }).then(function (response) {
        // console.log(response);

        //OnClick search button
        $("#search-button").on("click", function () {
            //city will get the value from the search value form
            var cityValue = $("#search-value").val();
            var listElement = $("<li>").addClass("list-group-item list-group-item-action");
             $(listElement).appendTo(".history").text(cityValue);
            searchedWeather()
        });


        function searchedWeather() {
            console.log(response);
            var h1El = $("<h1>").text(response.name);
            var tempPtag = $("<p>").text("Temperature: " + response.main.temp + " °F");
            var humidityPtag = $("<p>").text("Humidity: " + response.main.humidity + "%");
            var windPtag = $("<p>").text("Wind Speed: " + response.wind.speed + "MPH");
            //UV index need to be extracted from another API call
            // var uvIndexpTag = $("<p>").text()
            $("#today").append(h1El, tempPtag, humidityPtag, windPtag).addClass("border");
        }
    });

    
})
