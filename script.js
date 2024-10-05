








function palinndromeChecker(a) {

    var words = a;    
    var rev = '';
    var splitword = words.split(' ');
    console.log(splitword);
    for (var i = 0; i < splitword.length; i++) {

        rev += splitword[i].split("").reverse().join("") + " "
    }

    return rev
    
}


console.log(palinndromeChecker('We do programming today'));




