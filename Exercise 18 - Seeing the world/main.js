var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myLocations = ['naran', 'islamabad', 'kaghan', 'lahore', 'hunza'];
//showing the original order of location array
console.log('Original order', myLocations);
console.log('Alphabetically sorted locations ', __spreadArray([], myLocations, true).sort());
console.log('Original order', myLocations);
console.log('Alphabetically reversed order', __spreadArray([], myLocations, true).sort().reverse());
console.log('Original order', myLocations);
console.log('Reverse order', __spreadArray([], myLocations, true).reverse());
console.log('Reverse-reverse order', __spreadArray([], myLocations, true).reverse().reverse());
console.log('Sorting locations', myLocations.sort());
console.log('Sorted alphabetically', myLocations.sort(function (a, b) { return b.localeCompare(a); }));
