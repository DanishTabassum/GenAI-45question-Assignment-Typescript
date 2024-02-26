//Exercise 42 - Great magicians - continuing with Exercise 41 code
//Exercise 41 - Magicians
//creating function with array
function showMagicians(magicians) {
    console.log('The Magicians are...');
    //for every element of the magician array
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        //printing the name of each magician
        console.log(magician);
    }
}
//creating function of make_great()
function make_great(magicians) {
    var index = 0;
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        magicians[index] = magician + ' the Great!';
        index++;
    }
}
//creating new string array
var myMagicians = ['Me', 'You', 'Them', 'Who'];
//passing the created string array in function make_great
make_great(myMagicians);
//passing the created string array in function showMagician
showMagicians(myMagicians);
