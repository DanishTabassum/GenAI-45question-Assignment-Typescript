//Exercise 32 - Checking users
let currentUsers = ['Danish','aYesha','ahMad','saAd','zaiD'];
let newUsers = ['ahMAd','Saad','zAid','maliHa','rehaN'];
//converting both currentUsers and newUsers to Lowercase
let newUserLowercase = newUsers.map(nUser=>nUser.toLowerCase());
let currentUsersLowercase = currentUsers.map(cUser=>cUser.toLowerCase());
console.log (newUserLowercase);
console.log (currentUsersLowercase);

//comparing both arrays to check the validity
for(let counter of newUserLowercase){
    if(currentUsersLowercase.indexOf(counter)!== -1){
        console.log('Sorry!',counter,'is already taken.');
    }
else{
    console.log('Congratulations! your',counter,'is available');
}
}
