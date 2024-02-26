//Exercise 28 - Stages of life
var personAge = 42;
if (personAge < 2) {
    console.log('person is a baby');
}
else if (personAge >= 2 && personAge < 4) {
    console.log('person is toddler');
}
else if (personAge >= 4 && personAge < 13) {
    console.log('person is kid');
}
else if (personAge >= 13 && personAge < 20) {
    console.log('person is teenager');
}
else if (personAge >= 20 && personAge < 65) {
    console.log('person is adult');
}
else if (personAge >= 65) {
    console.log('person is an elder');
}
else {
    console.log('invalid age');
}
