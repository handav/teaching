var tracery = require('tracery-grammar');

//SIMPLE EXAMPLE
var grammar = tracery.createGrammar({
    'character': ['Karl', 'Aida', 'Hans'],
    'action': ['walk', 'stroll', 'meander'],
    'food': ['apple', 'banana', 'pineapple'],
    'place': ['office', 'bank', 'court'],
    'object': ['letter', 'paper', 'bribe'],
    'origin': ['#character.capitalize# #action.ed# to the #place# for #object.a#.']
});

//COMPLEX EXAMPLE
// var grammar = tracery.createGrammar({
//     'character': ['Karl', 'Aida', 'Hans'],
//     'place': ['office', 'bank', 'court'],
//     'object': ['letter', 'paper', 'bribe'],
//     'setPronouns': [
//         '[they:they][them:them][their:their][theirs:theirs]',
//         '[they:she][them:her][their:her][theirs:hers]',
//         '[they:he][them:him][their:his][theirs:his]'
//     ],
//     'setJob': [
//         '[job:lawyer][actions:argued in court,filed some paperwork]',
//         '[job:inspector][actions:talked with the lawyer,conducted meetings]',
//         '[job:officer][actions:arrested people,stood in the courtroom]'
//     ],
//     'story': ['#protagonist# the #job# went to the #place# every day. Usually #they# #actions#. Then #they# picked up #their# #object#.'],
//     'origin': ['#[#setPronouns#][#setJob#][protagonist:#character#]story#']
// });

grammar.addModifiers(tracery.baseEngModifiers);

var story = grammar.flatten('#origin#');
console.log(story);
