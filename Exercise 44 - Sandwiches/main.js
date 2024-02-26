//Exercise 44 - Sandwiches
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('\nSummary of order');
    if (items.length === 0) {
        console.log('**No order placed**');
    }
    else {
        console.log('items ordered');
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log('*', item);
        }
    }
}
//Calling the function
sandwiches('fajita');
sandwiches();
sandwiches('andaywala', 'chicken', 'beef');
