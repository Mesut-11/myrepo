function countCharacters(str) {
    str = str.replaceAll(" ","").toLowerCase();
    const counts = {};
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts;
}

const string = "write a function which takes a string and return a count of each character";
const charCounts = countCharacters(string);
for (const char in charCounts) {
    console.log(`${char}: ${charCounts[char]}`);
}