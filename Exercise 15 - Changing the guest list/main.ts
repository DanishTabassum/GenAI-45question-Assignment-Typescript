let guestList = ['Ammi','Abbu','Saima Baji','Faiza Baji','Haris Bhai'];
let greeting = ['you are invited for dinner','its dinner time!!','amazing dinner awaits you', 'you and your family are invited','lets get some fine dinner'];
let guestNotComing = 3;
console.log(guestList[guestNotComing]," We are going to miss you!\n\n");
guestList[guestNotComing] = 'Ayesha';
for (let counter = 0; counter < guestList.length; counter++){
    console.log(greeting[counter], guestList[counter]);
    //console.log(guestList[counter]);
}
