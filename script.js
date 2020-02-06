// // var $ = require("jQuery") require is not working well 
// $(document).ready(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
//     $("article").addClass("highlight");
// })


// We want only the words so lets not meddle with jQuery

var words = document.getElementsByTagName('p'); //reads p tags all good but not printing them?!
console.log(words[0].innerText);