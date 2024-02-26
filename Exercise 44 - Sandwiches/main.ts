//Exercise 44 - Sandwiches
function sandwiches (...items:string []){
    console.log('\nSummary of order');
    if(items.length === 0){
        console.log('**No order placed**');
    }
    else{
        console.log('items ordered');
        for(let item of items){
            console.log('*',item);
        }
    }
}
//Calling the function
sandwiches('fajita');
sandwiches();
sandwiches('andaywala','chicken','beef');
