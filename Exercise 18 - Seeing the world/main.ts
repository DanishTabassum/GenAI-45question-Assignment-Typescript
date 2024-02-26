let myLocations = ['naran','islamabad','kaghan','lahore','hunza'];
//showing the original order of location array
console.log('Original order',myLocations);
console.log('Alphabetically sorted locations ',[...myLocations].sort());
console.log('Original order',myLocations);
console.log('Alphabetically reversed order',[...myLocations].sort().reverse());
console.log('Original order',myLocations);
console.log('Reverse order',[...myLocations].reverse());
console.log('Reverse-reverse order',[...myLocations].reverse().reverse());
console.log('Sorting locations',myLocations.sort());
console.log('Sorted alphabetically',myLocations.sort((a,b) => b.localeCompare(a)));