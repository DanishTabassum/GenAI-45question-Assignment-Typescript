//Exercise 33 - Ordinal numbers
let ordinalNum = [1,2,3,4,5,6,7,8,9];
for(let counter =0; counter<=ordinalNum.length;counter++){
    if (ordinalNum[counter] === 1){
        console.log(ordinalNum[counter],'st');
    }
    if (ordinalNum[counter] === 2){
        console.log(ordinalNum[counter],'nd');
    }
    if (ordinalNum[counter] === 3){
        console.log(ordinalNum[counter],'rd');
    }
    if (ordinalNum[counter]>3){
        console.log(ordinalNum[counter],'th');
    }
}