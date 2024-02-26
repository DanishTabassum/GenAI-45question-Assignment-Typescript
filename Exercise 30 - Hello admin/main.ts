//Exercise 30 - Hello admin
let userLoginID = ['admin','ayesha', 'ahmad','saad','zaid','danish'];
for(let userLogin of userLoginID){
    if(userLogin ==='admin'){
        console.log ('Hello admin, would you like to see a status report?');
    }
    else{
        console.log ('Hello',userLogin, 'thank you for logging in again.');
    }
}