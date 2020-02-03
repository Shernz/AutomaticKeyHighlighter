// var $ = require("jQuery") require is not working well 
$(document).ready(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
    $("article").addClass("highlight");
})