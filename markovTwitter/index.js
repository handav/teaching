var fs = require('fs');
var csvparse = require('csv-parse');
var rita = require('rita');
var inputText = '';

var filePath = './twitter_archive/tweets.csv';

var tweetData = fs.createReadStream(filePath)
    .pipe(csvparse({delimiter: ','}))
    .on('data', function(row){
        inputText = inputText + ' ' + cleanText(row[5]);
    })
    .on('end', function(){
        var markov = new rita.RiMarkov(2);
        markov.loadText(inputText);
        var sentence = markov.generateSentences(1);
        console.log(sentence);
    });

function hasNoStopwords(token){
    var stopwords = ['@', 'http', 'RT'];
    return stopwords.every(function(sw){
        return !token.includes(sw);
    });
}

function cleanText(text){
    return rita.RiTa.tokenize(text, ' ')
        .filter(hasNoStopwords)
        .join(' ')
        .trim();
}