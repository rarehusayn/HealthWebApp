/*
THE ACTUAL FILE SCRIPT THAT NEEDS TO CHECK
*/

/*
function name: intialize
description: this is to start the script
remark:
author: mr huzai
date:
*/
function initialize(){
    $(document).ready(function() {
        clickOnTheBoxes("#body-boxes", translations, drawToDom);
    })
}

/*
function name: clickOnTheBoxes
description: this is on click event which originally works by highlight the parts through click
remark: might not using this event any more
author: mr huzai
date:
*/
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

/*
function name: checkDictionary
description: it fetches the data from dictionary.js file
remark: 
author: mr huzai
date:
*/
function checkDictionary(event,svgRoot){
    newtarget = event
    var bodyInfo = event["currentTarget"]["dataset"];
    drawToDom(bodyInfo,svgRoot)
}

/*
function name: checkDictionary
description: where it actually do the green drawing on the body parts
remark: 
author: mr huzai
date:
*/
function drawToDom(bodyInfo,svgRoot){
    console.log(svgRoot)
}

initialize();//run the script



