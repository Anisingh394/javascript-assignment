
/**
 
 * 1). The time has a format: hours:minutes. Both hours and minutes
have two digits, like 09:00.
// => regular exp for time is : ^[0-2][0-3]:[0-5][0-9]$
 */

/**
 2.) Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".


 */

function isHapy(str) {
    let text = "Hello i am happin";
    let regex = /[Hp][aA][pP][pP][iI][nN][eE][sS][sS]/gmi
    let n = text.search(regex);
    if(n != -1) console.log("Hurray");
    else console.log("not Hurray");
}

/*
3). Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
*/

/*
4). Create a function that will return an integer number
corresponding to the amount of digits in the given integer num

*/

function getNums(num) {
    let res = 0;
    while(num > 0) {
        num = num/10;
        res++;
    }
    return res;
}

/*
5). Create a function that takes in a number as a string n and returns
the number without trailing and leading zeros.
*/

function remTrail(num) {
    let resNum = toString(num);
}

/*
6). Create a function that takes a word and returns true if the word
has two consecutive identical letters.
*/
function isCon(str) {
    let itr = 0;
    while(itr < str.length-1) {
        if(str[itr] == str[itr+1]) return true;
        itr++;
    }
    return false;
}


/*
7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
cannot contain anything but exactly 4 digits or exactly 6 digits. Your

task is to create a function that takes a string and returns true if the
PIN is valid and false if it's not.
*/

function isPin(pin) {
    return 4 === toString(pin).length;
}

/*
8). Create a function that determines whether a string is a valid hex
code. A hex code must begin with a pound key # and is exactly 6
characters in length. Each character must be a digit from 0-9 or an
alphabetic character from A-F. All alphabetic characters may be
uppercase or lowercase.
*/

function isCorHex(code) {
    if(code[0] != '#') return false;
    for(let i = 1; i < code.length; i++) {
        let ch = code[i];
        if(!(ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))return false;
    }
    return true;
}

/*
9). Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".
*/

function isSev(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 7) return true;
    }
    return false;
}

/*
10). Create a function that takes a string, checks if it has the same
number of x's and o's and returns either true or false.
*/

function isEqxo(str) {
    let x = 0, o = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'x' || str[i] == 'X') x++;
        else o++;
    }
    return x == o;
}


