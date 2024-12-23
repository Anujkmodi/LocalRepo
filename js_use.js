var a=1;
function abc()
{
    var obj= document.getElementById("aa");
    obj.innerText(a);
    a++;
}
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"
