
$(function(){ // if you want to use load ---- $(window).on('load', function() { ... });
    var words = []
    $("body").children().not("script, code").each(function(i, ele) { // extracting the words under body tag 
        words = words.concat($(ele).text().trim().split(" ")); // pushing them to the array after trimming off the white space and splitting them into words 
    });
    process(words) // call the core function
})


function process(wordList) { // core function
    let tfdf = {}, keywords = [], keys = [], special = /[!@#$%^&*(){}\+\-.;:/*<>,''""]+/
    
    for (let i in wordList) {
        if  (!/\d+/.test(wordList[i]) &&  (!(special.test(wordList[i])))) {
            if ((wordList[i] !== undefined) && (!(wordList[i] in tfdf))) {  // calculate the occurance of each word tf : Term Frequency and df = document frequency... No of times the word occurs in all the documents here its always one
                tfdf[wordList[i]] = {
                    "tf" : 1
                }
            }
            else {
                tfdf[wordList[i]]["tf"] += 1
            }
        }
    }
    
    for (let w in tfdf) {
        let tf = tfdf[w].tf
        tfdf[w].score = tf * Math.abs(Math.log(1 / tf))
        if (tfdf[w].score === 0) keywords.push(w)
    }
    // console.log(tfdf)
    highlighter(keywords)
}

function highlighter (words) {
    // console.log(words)
    // var Html = $('body').html()
    // words.forEach(word => {
    //     Html = Html.replace(word, `<span>${word}</span>`);
    //     // $('body').html().replace(wo, "<span class = 'highlight'>" + word + "</span>"))
    // });
    // $('body').html(Html)
    // $("span").addClass("highlight")
    // console.log(Html)
    $('body').highlight(words, {wordsOnly : true})
}

// Use TF-IDF for keyword detection.
// You can't use the key-value[number] pair as you want to record both term and document frequency.
// Hence you can use objects as value for the key, as arrays may complicate things in future.
// score = tf * log((no of docs) / (no of documents in which the word appeared))  for reducing the scale
