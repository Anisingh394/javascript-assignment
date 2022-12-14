
// 1. first queation truncate string for length > 4

let st = "Iceream";
function trucStr(str) {
  if(str.length > 4) {
    return str.substring(0, 4);
  }
}
console.log(trucStr(st));

// 2. quesiton remove white sapces
function remWhite(str) {
  s = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') continue;
    s += str[i];
  }
  return s;
}
console.log(remWhite("Hello I am Shivam"));

// 3. swap the sentence words
function swapWrods(str) {
  s = "";
  ans = "";
  for(let i = 0;i < str.length; i++) {
    s += str[i];
    if(str[i] === ' '){
      ans += [...s].reverse().join("");
      s = "";
    }
  }
  return ans;
}
console.log(swapWrods("Hello Shivam HOw are you"));

// 4. repleace s with x
function repAtoX(str) {
  ans = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a'){
      ans += 'x';
      continue;
    }
    ans += str[i];
  }
  return ans;
}
console.log(repAtoX("apple"));


// 5. conv str to arr
function convStrArr(str) {
  arr = [];
  for(let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}
console.log(convStrArr("Shivam"));

// 6. getcount
function getCount(str) {
  return (str.match(/Shivam/g) || []).length;
}
console.log(getCount("Shivam is Shivam with Shivam", "Shivam"));


// 7. break in new line
function breakNL(str) {
  return str.slice(0, 6) + "\n" + str.slice(6);
}
console.log(breakNL("Shivam is awesome"));

//8. is lower
function isLower(str) {
  if(str[0] >= 'a' && str[0] <= 'z') return true;
  return false;
}
console.log(isLower("VAM"));

// 9. is eyes
function isYes(str) {
  if(str.toLowerCase() === "yes") return true;
  return false;
}
console.log(isYes("yES"));



// 10. do operations
function doOpr(str) {
  // Convert the String into upper case.
  st = str.toUpperCase();
  console.log(st);

  // Convert only the first character to uppercase.
  st = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(st);

  // lowercase str
  st = str.toLowerCase();
  console.log(st);

  // Break the string into two halves and swap them.
  st = str.slice(0, str.length/2) + " " + str.slice(str.length/2);
  console.log(st);

  //Count the repeating characters.
  flag = false;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log(str.charAt(i));
        flag = true;
        break;
      }
    }
    if(flag) break;
  }

  //Reverse the string
  st = [...str].reverse().join("");
  console.log(st);

}
doOpr("shivam is awesome");