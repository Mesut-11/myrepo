//write a function which takes a string and return a count of each character

string = "write a function which takes a string and return a count of each character";

string = string.replaceAll(" ","").toLowerCase();
const counts = {}
for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (counts[char] > 0){
        counts[char]++;
        console.log(char, counts[char]);
    }
    else {
        counts[char] = 1;
    }
}
console.log(counts)
