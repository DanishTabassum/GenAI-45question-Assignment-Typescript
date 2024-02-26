var guestList = ['Ammi', 'Abbu', 'Saima Baji', 'Faiza Baji', 'Haris Bhai'];
//var greeting = ['you are invited for dinner', 'its dinner time!!', 'amazing dinner awaits you', 'you and your family are invited', 'lets get some fine dinner'];
//var guestNotComing = 3;
//console.log(guestList[guestNotComing], " We are going to miss you!\n\n");
//guestList[guestNotComing] = 'Ayesha';
console.log ("Hurry! we have found a bigger table")
guestList.unshift('Faiza Baji');
guestList.splice(0,1,'Ayesha');
guestList.push('Mama');
for (var counter = 0; counter < guestList.length; counter++) {
    console.log(guestList[counter],', you are invited for the dinner party');
    //console.log(guestList[counter]);
}
