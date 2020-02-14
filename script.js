// // var $ = require("jQuery") require is not working well 
$(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
    var words = []
    $("body").children().not("script").each(function(i, ele) {
        words.push($(ele).text().trim());
    });
    process(words)
})

function process(wordList) {
    console.log(wordList) // 0th index contains the heading tags
}

// Use TF-IDF for keyword detection.
// You can't use the key-value[number] pair as you want to record both term and document frequency.
// Hence you can use objects as value for the key, as arrays may complicate things in future.
