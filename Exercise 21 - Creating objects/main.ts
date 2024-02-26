//Exercise 20 - Think of an array
//let country = ['Pakistan','China','India','Russia','Germany'];
//console.log(country);
//Exercise 21 - Creating Objects
type myCountryObject = {
    name: string;
    rivers: number;
    capital: string;
    population: string;
    };
//creating objects from myCountryObject
const pak: myCountryObject = {
    name : 'Pakistan',
    rivers : 5,
    capital : 'Islamabad',
    population : '225m'
};
const chn: myCountryObject = {
    name : 'China',
    rivers : 5,
    capital : 'Beijing',
    population : '1.45b'
};
const ind: myCountryObject = {
    name : 'India',
    rivers : 7,
    capital : 'New Dehli',
    population : '1.4b'
};
const rus: myCountryObject = {
    name : 'Russia',
    rivers : 100,
    capital : 'Moscow',
    population : '145m'
};
const germ: myCountryObject = {
    name : 'Germany',
    rivers : 4,
    capital : 'Berlin',
    population : '83m'
};

//printing the objects
console.log (pak);
console.log (ind);
console.log (germ);
console.log (rus);
console.log (chn);
