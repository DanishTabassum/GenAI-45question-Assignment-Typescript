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
//creating new string array
let myMagicians = ['Me','You','Them','Who'];
//passing the created string array in function showMagician
showMagicians(myMagicians);
