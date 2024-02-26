var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Exercise 43 - Unchanged magicians - continuing with Exercise 41 code
// Define the make_great function
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
// Define the show_magicians function
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ["Me", "You", "They", "Them"];
// Create a copy of the original array
var originalMagicians = __spreadArray([], magicians, true);
// Call the make_great function with the copy of the array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Call the show_magicians function with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
