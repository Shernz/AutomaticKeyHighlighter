// // var $ = require("jQuery") require is not working well 
$(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
    var words = []
    $("body").children().not("script", "code").each(function(i, ele) { // extracting the words under body tag 
        words = words.concat($(ele).text().trim().split(" ")); // pushing them to the array after trimming off the white space and splitting them into words 
    });
    process(words) // call the core function
})

// function compare(a, b) {
//     return 
// }

function process(wordList) { // core function
    let tfdf = {}, keywords = [], keys = []
     // 0th index contains the heading tags
    
    for (let i in wordList) {
        if  (!/\d+/.test(wordList[i])) {
            if ((wordList[i] !== undefined) && (!(wordList[i] in tfdf))) {  // calculate the occurance of each word tf : Term Frequency and df = document frequency... No of times the word occurs in all the documents here its always one
                tfdf[wordList[i]] = {
                    "tf" : 1
                }
                // keys.push(wordList[i])
            }
            else {
                tfdf[wordList[i]]["tf"] += 1
            }
        }
    }
    
    // console.log(tfdf)
    for (let w in tfdf) {
        let tf = tfdf[w].tf
        tfdf[w].score = tf * Math.abs(Math.log(1 / tf))
        if (tfdf[w].score === 0) keywords.push(w)
    }
    console.log(keywords)
}

// Use TF-IDF for keyword detection.
// You can't use the key-value[number] pair as you want to record both term and document frequency.
// Hence you can use objects as value for the key, as arrays may complicate things in future.
// score = tf * log((no of docs) / (no of documents in which the word appeared))  for reducing the scale
