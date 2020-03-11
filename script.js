$(function(){ 
    var words = []
    $("body").children().not("script").each(function(i, ele) { 
        words = words.concat($(ele).text().trim().split(" ")); 
    });
    process(words) 
})


function process(wordList) { 
    let tfdf = {}, keywords = [], keys = [], special = /[!@#$%^&*(){}\+\-.;:/*<>,''""]+/
    
    for (let i in wordList) {
        if  (!/\d+/.test(wordList[i]) &&  (!(special.test(wordList[i])))) {
            if ((wordList[i] !== undefined) && (!(wordList[i] in tfdf))) {  
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
    highlighter(keywords)
}


function highlighter (words) {
    $('body').highlight(words, {wordsOnly : true})
}


