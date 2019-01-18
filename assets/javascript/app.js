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
        
        var input = $("#user-input").val();
        
        var userBtn = $("<button>");

        userBtn.addClass("hey-look-a-button");

        userBtn.text(input);

        $("#button-holder").append(userBtn);

        $("#user-input").val('');
    });

    $(".hey-look-a-button").on("click", function() {
        $("#gif-div").empty();
        var topicBtn = $(this).text();
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
                    
                var p = $("<p>").text("Rating: " + rating);
                    
                var gifImage = $("<img>");

                gifImage.attr("src", result[i].images.fixed_height_still.url);
                gifImage.attr("data-state", "still");
                gifImage.addClass("gif-image");

                gifDiv.append(p);
                gifDiv.append(gifImage);

                $("#gif-div").prepend(gifDiv);

                // $(".gif").hover(function() {
                //     gifImage.attr("src", result[i].image.fixed_height.url);
                // });

                $(".gif-image").on("click", function() {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                      $(this).attr("src", $(this).attr(result[i].image.fixed_height.url));
                      $(this).attr("data-state", "animate");
                    } else {
                      $(this).attr("src", $(this).attr(result[i].images.fixed_height_still.url));
                      $(this).attr("data-state", "still");
                    };
                  });
                

            };

        // .then(function(response) {
        //     console.log(response);
        //     var result = response.data;

        //     $("<img>").attr("src", result[1].images.fixed_height.url);

        //     for (var j = 0; j < result.length; j++) {

        //         $("<img>").attr("src", result[j].images.fixed_height.url);

        //         // Only taking action if the photo has an appropriate rating
        //         if (result[j].rating !== "g" && result[j].rating !== "pg-13") {
        //             // Creating a div with the class "item"
        //             var gifDiv = $("<div class='item'>");

        //             // Storing the result item's rating
        //             var rating = result[j].rating;

        //             // Creating a paragraph tag with the result item's rating
        //             var p = $("<p>").text("Rating: " + rating);

        //             // Creating an image tag
        //             var personImage = $("<img>");

        //             // Giving the image tag an src attribute of a proprty pulled off the
        //             // result item
        //             personImage.attr("src", result[j].images.fixed_height.url);

        //             // Appending the paragraph and personImage we created to the "gifDiv" div we created
        //             gifDiv.append(p);
        //             gifDiv.append(personImage);

        //             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        //             $("#gifs-appear-here").prepend(gifDiv);
        //         };
        //     };
        });
    });


    // $("button").on("click", function() {
    //     // In this case, the "this" keyword refers to the button that was clicked
    //     var person = $(this).attr("data-person");

    //     // Constructing a URL to search Giphy for the name of the person who said the quote
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //       person + "&api_key=dc6zaTOxFJmzC&limit=10";

    //     // Performing our AJAX GET request
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     })
    //         // After the data comes back from the API
    //         .then(function(response) {
    //         // Storing an array of results in the results variable
    //         var results = response.data;

    //         // Looping over every result item
    //         for (var i = 0; i < results.length; i++) {

    //             // Only taking action if the photo has an appropriate rating
    //             if (results[i].rating !== "g" && results[i].rating !== "pg-13") {
    //                 // Creating a div with the class "item"
    //                 var gifDiv = $("<div class='item'>");

    //                 // Storing the result item's rating
    //                 var rating = results[i].rating;

    //                 // Creating a paragraph tag with the result item's rating
    //                 var p = $("<p>").text("Rating: " + rating);

    //                 // Creating an image tag
    //                 var personImage = $("<img>");

    //                 // Giving the image tag an src attribute of a proprty pulled off the
    //                 // result item
    //                 personImage.attr("src", results[i].images.fixed_height.url);

    //                 // Appending the paragraph and personImage we created to the "gifDiv" div we created
    //                 gifDiv.append(p);
    //                 gifDiv.append(personImage);

    //                 // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    //                 $("#gifs-appear-here").prepend(gifDiv);
    //             }
    //         }
    //     });
    // });

});