//Exercise 43 - Unchanged magicians - continuing with Exercise 41 code
// Define the make_great function
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }

    return greatMagicians;
}

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["Me", "You", "They", "Them"];

// Create a copy of the original array
let originalMagicians: string[] = [...magicians];

// Call the make_great function with the copy of the array
let greatMagicians: string[] = make_great([...magicians]);

// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call the show_magicians function with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
