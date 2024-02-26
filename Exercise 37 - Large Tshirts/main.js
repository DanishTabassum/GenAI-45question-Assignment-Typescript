//Exercise 37 - Large Tshirts
//Creating a function
function myTshirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Typescript'; }
    console.log('The size of the Tshirt is', size, '\nMessage that will be printed on the Tshirt is', message);
}
myTshirt();
myTshirt('medium');
myTshirt('medium-large', 'Danish');
