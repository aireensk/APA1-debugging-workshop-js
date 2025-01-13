function capitalise(word) {


    let firstLetter = word.charAt(0).toUpperCase();
    let rest = word.slice(1).toLowerCase(); 

    word = `${firstLetter}${rest}`;
    return word;
}

module.exports = { capitalise };

 
