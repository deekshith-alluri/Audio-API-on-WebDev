$('button').click(function(){
    $.ajax({
        url: "./testing0001.html",
        method: "GET",
        dataType: "html",
        success: function(response) {
            $('#result').html(response);
            
            // Wait for the image to load in the dynamically loaded content
            $('#result').find('img').on('load', function() {
                console.log("Image loaded, initializing audio...");
                jquery.initAudio("../music/akk-1.mp3");
            });
        },
        error: function(req, status, error) {
            console.error("Error: ", status, error);
        }
    });
});
