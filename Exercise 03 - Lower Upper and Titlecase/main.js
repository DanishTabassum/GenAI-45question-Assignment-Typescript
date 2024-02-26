var person_Name = "danish tabassum";
console.log(person_Name.toLowerCase());
console.log(person_Name.toUpperCase());
console.log(person_Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
