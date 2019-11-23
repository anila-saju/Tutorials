$(document).ready(function () {
    // add event handler for the click event
    $(".animal").click(function () {
        // retrieve the data-animal attribute
        var animal = $(this).attr("data-animal");

        // create an <audio> element
        var audio = document.createElement("audio");

        // set the source of the <audio> element with
        // the proper .ogg file
        $(audio).attr("src", "media/" + animal + ".ogg");

        // play the sound
        audio.play();
    });
});