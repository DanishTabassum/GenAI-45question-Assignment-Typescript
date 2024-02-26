//Exercise 16 code
var guestList = ['Ammi', 'Abbu', 'Saima Baji', 'Faiza Baji', 'Haris Bhai'];
//adding new invites
console.log("Hurry! we have found a bigger table");
guestList.unshift('Faiza Baji');
guestList.splice(0, 1, 'Ayesha');
guestList.push('Mama');
//sending invitations with added guests
for (var counter = 0; counter < guestList.length; counter++) {
    console.log(guestList[counter], ', you are invited for the dinner party');
    //console.log(guestList[counter]);
}
//Exercise 17 code
//Apologizing guests, sending the message for not invited and removing them
console.log("\n \nwe can invite only two people due to dinner table space unavailability");
for (counter = 0; counter < guestList.length - 2; counter++) {
    console.log(guestList[counter], ', we are extremely sorry we cannot invite you');
}
guestList.splice(0, counter);
console.log(guestList);
counter = 0;
//sending final invitation to remaining guests
while (counter != guestList.length) {
    console.log(guestList[counter], ', you are invited');
    counter++;
}
//Clearing the array of guestList
guestList.splice(0, counter);
console.log(guestList);
