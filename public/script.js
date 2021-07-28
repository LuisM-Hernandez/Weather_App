$(document).ready(function () {

    var currentWeatherKey = "a2f3ec0bbd04ecbee60efbaafff7a5b2"
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&appid=" + currentWeatherKey;

    //Ajax request
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&units=imperial&appid=" + currentWeatherKey,
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
            fiveDayForecast()
        });


        function searchedWeather() {
            // console.log(response);
            var h1El = $("<h1>").text(response.name);
            var tempPtag = $("<p>").text("Temperature: " + response.main.temp + " °F");
            var humidityPtag = $("<p>").text("Humidity: " + response.main.humidity + "%");
            var windPtag = $("<p>").text("Wind Speed: " + response.wind.speed + "MPH");
            //UV index need to be extracted from another API call
            // var uvIndexpTag = $("<p>").text()
            $("#today").append(h1El, tempPtag, humidityPtag, windPtag).addClass("border");
        }

        function fiveDayForecast(){
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/forecast?q=Kissimmee&units=imperial&appid=" + currentWeatherKey,
                method:"GET"
            }).then(function (data) {
                console.log(data.list);

                var dayList = data.list

                var day1 = $("#day1").text(moment().add(1, 'days').format('l'))
                var day2 = $("#day2").text(moment().add(2, 'days').format('l'))
                var day3 = $("#day3").text(moment().add(3, 'days').format('l'))
                var day4 =$("#day4").text(moment().add(4, 'days').format('l'))
                var day5 =$("#day5").text(moment().add(5, 'days').format('l'))

                $("<p>").appendTo(day1).text("Temp: " + dayList[1].main.temp)
                $("<p>").appendTo(day1).text("Humidity: " + dayList[1].main.humidity)





















                // var weekForecast = data.list;
                // var weekDiv = $("<div>").addClass("col forecast bg-primary text-white ml-3 mb-3 rounded")
                // $(weekDiv).appendTo(".daycolumns").text("hello")
                // $("#day1").text(moment().add(1,"days").format("MM/DD/YY"));
                // $("<img>").attr("src", "http://openweathermap.org/img/wn/" + fiveDays.list[0].weather[0].icon + "@2x.png").appendTo("#day1");
                // $("<div>").text("Temperature: "+ fiveDays.list[0].main.temp + " °F").appendTo("#day1");
                // $("<div>").text("Humidity: "+ fiveDays.list[0].main.humidity + "%").appendTo("#day1");

                // for (let i = 0; i < 5; i++) {
                //     const element = weekForecast[i];
                //     console.log(element);
                // }
                               
            })
        }
    });

    
})
