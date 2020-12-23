let words = ['spray', 'limit', 'elite', 'exuberant', 'destuction', 'present'];

let longWords = words.filter(function (word, index, array) {
    return word.length > 6;
});

console.log(longWords);

let longWordss = words.filter(word => {
    return word.length > 6;
});

console.log(longWordss);