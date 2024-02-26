//Exercise 38 - Cities
//creating function of describe_city()
function describe_city(city, country) {
    if (city === void 0) { city = 'Karachi'; }
    if (country === void 0) { country = 'Pakistan'; }
    console.log(city, 'is in', country);
}
describe_city();
describe_city('Lahore');
describe_city('Islamabad');
describe_city('Naran');
