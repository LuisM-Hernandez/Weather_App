$(document).ready(function () {

    var currentWeatherKey = "a2f3ec0bbd04ecbee60efbaafff7a5b2"
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&appid=" + currentWeatherKey;

    //Ajax request
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=Kissimmee&appid=" + currentWeatherKey,
        method:"GET"
    }).then(function (response) {
        console.log(response);

        //OnClick search button
        $("#search-button").on("click", function () {
            //city will get the value from the search value form
            var cityValue = $("#search-value").val();
            // console.log(cityValue);
            var listElement = $("<li>").addClass("list-group-item list-group-item-action");
            var complete = $(listElement).appendTo(".history").text(cityValue)
            console.log(complete);
        });
        
    });


    
})
