//Initialize the cript
function initialize(){
    $(document).ready(function() {
        clickOnTheBoxes("#body-boxes", translations, drawToDom);
    })
}

//On click event
function clickOnTheBoxes(elementToSelect, drawToDom){
    $(elementToSelect).attr('data','images/body-boxes.svg?'+new Date().getTime())
        .on("load", function(event){
        var boxes = document.getElementById("body-boxes");
        var svgDoc = boxes.contentDocument;
        var svgRoot  = svgDoc.documentElement;
        $(svgRoot).find('[data-target="body-part"]').on("click", function(event){
            checkDictionary(event,svgRoot);
        })
   });
}

function checkDictionary(event,svgRoot){
    newtarget = event
    var bodyInfo = event["currentTarget"]["dataset"];
    drawToDom(bodyInfo,svgRoot)
}

/*
description: this function is to highlight green color on the body parts
*/
function drawToDom(bodyInfo,svgRoot){
    console.log(svgRoot)
}

initialize();



