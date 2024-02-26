//Exercise 32 - Checking users
var currentUsers = ['Danish', 'aYesha', 'ahMad', 'saAd', 'zaiD'];
var newUsers = ['ahMAd', 'Saad', 'zAid', 'maliHa', 'rehaN'];
//converting both currentUsers and newUsers to Lowercase
var newUserLowercase = newUsers.map(function (nUser) { return nUser.toLowerCase(); });
var currentUsersLowercase = currentUsers.map(function (cUser) { return cUser.toLowerCase(); });
console.log(newUserLowercase);
console.log(currentUsersLowercase);
//comparing both arrays to check the validity
for (var _i = 0, newUserLowercase_1 = newUserLowercase; _i < newUserLowercase_1.length; _i++) {
    var counter = newUserLowercase_1[_i];
    if (currentUsersLowercase.indexOf(counter) !== -1) {
        console.log('Sorry!', counter, 'is already taken.');
    }
    else {
        console.log('Congratulations! your', counter, 'is available');
    }
}
