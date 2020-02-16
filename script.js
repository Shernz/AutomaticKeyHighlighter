// // var $ = require("jQuery") require is not working well 
$(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
    var words = []
    $("body").children().not("script", "code").each(function(i, ele) { // extracting the words under body tag 
        words.push($(ele).text().trim().split(" ")); // pushing them to the array after trimming off the white space and splitting them into words 
    });
    process(words) // call the core function
})

function process(wordList) { // core function
    let allWords = [], tfdf = {}, keywords = []
    for (let i in wordList) {
        allWords = allWords.concat(wordList[i]) // the each array in wordList is appended to obtain one whole array or bag of words
    } // 0th index contains the heading tags
    
    for (let i in allWords) {
        if ((allWords[i] !==  null) && (tfdf[allWords[i]] === undefined)) {  // calculate the occurance of each word tf : Term Frequency and df = document frequency... No of times the word occurs in all the documents here its always one
            tfdf[allWords[i]] = {
                "tf" : 1
            }
        }
        else {
            tfdf[allWords[i]].tf++
        }
    }
    
    let score = 0
    for (let w in tfdf) {
        score = w.tf * Math.log(1 / w.tf) // calculate the score of the word with respect to all the documents. REF === > Line 40
        // console.log(`${score}`)
        // alert(score)
    }
    // console.log(tfdf)
    
}

// Use TF-IDF for keyword detection.
// You can't use the key-value[number] pair as you want to record both term and document frequency.
// Hence you can use objects as value for the key, as arrays may complicate things in future.
// score = tf * log((no of docs) / (no of documents in which the word appeared))  for reducing the scale
