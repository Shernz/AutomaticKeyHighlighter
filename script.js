// // var $ = require("jQuery") require is not working well 
// $(document).ready(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
//     $("article").addClass("highlight");
// })


// We want only the words so lets not meddle with jQuery

var words = [];
words.push(document.getElementsByTagName("P")[0].textContent); //reads p tags all good but not printing them?! -- resolved by changing the script location.
console.log(words);

/* To extract all the text -- store 
        document.getElementsByTagName("P") seperately and access each tag by it's index.
*/


