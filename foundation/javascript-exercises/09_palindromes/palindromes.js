const palindromes = function (str) {
    let newStrR = str.split('')
                     .filter((letter)=>(letter.match(/[a-zA-Z0-9]/))? true : false)
                    .map((elem)=>{
                        return elem.match(/[a-zA-Z]/) ? elem.toLowerCase() : elem});
    let newStr = newStrR.slice();
    newStrR.reverse();
    return newStr.join('') === newStrR.join('');
};

// Do not edit below this line
module.exports = palindromes;
