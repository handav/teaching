var fs = require('fs');
var rita = require('rita');

var inputText = '';
var filePath = './theWaves.txt';

var textData = fs.readFile(filePath, 'utf-8', function(err, data){
    if (err){
        console.log(err);
    }else{
        var cleanedText = cleanText(data);
        console.log(cleanedText);
        var markov = new rita.RiMarkov(2);
        markov.loadText(cleanedText);
        var sentence = markov.generateSentences(3);
        console.log(sentence); 
    }
});

function cleanText(text){
    return rita.RiTa.tokenize(text)
        .join(' ')
        .trim();
}