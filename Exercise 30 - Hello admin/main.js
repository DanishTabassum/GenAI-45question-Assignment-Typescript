//Exercise 30 - Hello admin
var userLoginID = ['admin', 'ayesha', 'ahmad', 'saad', 'zaid', 'danish'];
for (var _i = 0, userLoginID_1 = userLoginID; _i < userLoginID_1.length; _i++) {
    var userLogin = userLoginID_1[_i];
    if (userLogin === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log('Hello', userLogin, 'thank you for logging in again.');
    }
}
