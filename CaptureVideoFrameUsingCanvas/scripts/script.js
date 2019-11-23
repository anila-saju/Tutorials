$(document).ready(function () {
    $("#capture").click(function () {
        // get references to the video and output elements
        var output = $("#output");
        var video = $("#video").get(0);

        // create a canvas element
        var canvas = document.createElement("canvas");

        // set the canvas size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // get the drawing context of the canvas and add the video as an image
        // this will render the current frame inside the canvas
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        // create an image element
        var img = document.createElement("img");

        // set the image source as the base64 string representation 
        // of the content found in the canvas
        img.src = canvas.toDataURL();

        // clear the output element and add the resulted image
        output.empty();
        output.prepend(img);

        // if the Download checkbox is cheked, download a snapshot of the canvas
        if ($("#download").is(":checked")) {
            var href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.setAttribute('download', 'capture.png');
            link.setAttribute('href', href);
            link.click();
        }
    });
});