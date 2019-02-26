$(document).ready(function() {

    var topics = [
        "Rainbow Six Siege",
        "World of Warcraft",
        "Game of Thrones",
        "Cats",
        "Foxes",
        "Harry Potter",
        "Avatar: The Last Airbender"
    ];

    for (var i = 0; i < topics.length; i++) {
        
        var starterBtns = $("<button>");

        starterBtns.addClass("hey-look-a-button");

        starterBtns.text(topics[i]);

        $("#button-holder").append(starterBtns);

        console.log(topics[i]);
    };

    $("#add-button").on("click", function() {
        
        var input = $("#user-input").val().trim();
        
        var userBtn = $("<button>");

        userBtn.addClass("hey-look-a-button");

        userBtn.text(input);

        $("#button-holder").append(userBtn);

        $("#user-input").val('');
    });

    $(document).on("click", ".hey-look-a-button", function() {
        $("#gif-div").empty();
        var topicBtn = $(this).text().trim();
        console.log(topicBtn);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JffaLdfKwSsD5MR3twoOXVovkQNF7ChJ&q=" + 
        topicBtn +
        "&limit=10&offset=0&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            
            var result = response.data;
            console.log(response);

            
            for (var i = 0; i < result.length; i++) {

                var gifDiv = $("<div class='gif'>");
                   
                var rating = result[i].rating;
                    
                var p = $("<p>").text("Rating: " + rating).addClass("rating");
                    
                var gifImage = $("<img>");

                gifImage.attr("src", result[i].images.fixed_height.url);
                gifImage.attr("data-state", "still");
                gifImage.addClass("gif-image");

                gifDiv.append(p);
                gifDiv.append(gifImage);

                $("#gif-div").prepend(gifDiv);

                // $(".gif-image").on("click", function() {
                    
                //     var state = $(this).attr("data-state");
                //     if (state === "still") {
                //         console.log("animate");
                //         $(this).attr("src", $(this).attr(result[i].images.fixed_height.url));
                //         $(this).attr("data-state", "animate");
                //     } else {
                //         console.log("still");
                //         $(this).attr("src", $(this).attr(result[i].images.fixed_height_still.url));
                //         $(this).attr("data-state", "still");
                //     };
                // });
            };      
        });
    });
});