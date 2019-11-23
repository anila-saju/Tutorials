window.onload = function() {
    // get references to the canvas and its context
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    // get the offset position of the canvas
    var Offset=$(canvas).offset();
    var offsetX=Offset.left;
    var offsetY=Offset.top;   

    // select all .tool's
    var images=$(".image");

    // make all .tool's draggable
    images.draggable({
        helper:'clone',
    });

    // assign each image an attribute containing its index
    images.each(function(index){
        $(this).data("imageIndex",index);
    });

    // make the canvas a dropzone
    $(canvas).droppable({
        drop:((e, ui) => {
            // determine the closest point in the grid on X axis
            var x= parseInt(parseInt((ui.offset.left-offsetX)-1) / 100) * 100;

            // determine the closest point in the grid on Y axis
            var y= parseInt(parseInt(ui.offset.top-offsetY) / 100) * 100;

            // determine the width and the height of the image
            var width=ui.helper[0].width;
            var height=ui.helper[0].height;
            
            // get the drop payload (here the payload is the $tools index)
            var theIndex=ui.draggable.data("imageIndex");

            // get the image having the respective index
            var image = images[theIndex];

            // drawImage at the drop point using the dropped image 
            // This will make the img a permanent part of the canvas content
            ctx.drawImage(image, x, y, width, height);
        }),
    });
}