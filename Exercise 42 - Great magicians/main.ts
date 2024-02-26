//Exercise 42 - Great magicians - continuing with Exercise 41 code
//Exercise 41 - Magicians
//creating function with array
function showMagicians(magicians:string[]){
    console.log('The Magicians are...');
    //for every element of the magician array
    for(let magician of magicians){
        //printing the name of each magician
        console.log(magician);
    }
}
//creating function of make_great()
function make_great(magicians:string[]){
    let index = 0;
    for(let magician of magicians){
        magicians[index] = magician + ' the Great!';
        index++;
    }
    }

//creating new string array
let myMagicians = ['Me','You','Them','Who'];
//passing the created string array in function make_great
make_great(myMagicians);
//passing the created string array in function showMagician
showMagicians(myMagicians);