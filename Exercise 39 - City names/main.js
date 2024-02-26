//Exercise 39 - City names
//constructing function city_country()
//function city_country(city:string , country:string):string{
//  return ,city;
//}
//console.log(city_country('Karachi','Pakistan'));
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Dhaka', 'Bangladesh'));
console.log(city_country('Beijing', 'China'));
