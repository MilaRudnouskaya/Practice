var someDiv = document.createElement("div")
someDiv.id = 'someId'

var width1 = 500;
var height1 = 300;

someDiv.style.width = width1 + "px";
someDiv.style.height = height1 + "px";
someDiv.style.backgroundColor = "#123456";
someDiv.style.position = "absolute";

document.body.appendChild(someDiv);


// $('#someDiv').click(function() {
//   $(this).animate({
//     left: '+=250'
//   }, 1500, "easeOutBounce", function() {
//     // callBack
//   });
// });



$(document).ready(function(){
    $('#someId').animate({left: '250px'});
});