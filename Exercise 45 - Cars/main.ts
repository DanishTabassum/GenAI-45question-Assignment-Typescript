//Exercise 45 - Cars
// Define the CarInfo function
type CarInfo = {manufacturer: string; model: string; [key: string]: string | number;};

function createCar(manufacturer: string, model: string, ...options: [string, string | number][]): CarInfo {
    let car: CarInfo = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Example usage:
const myCar = createCar('Honda', 'Fit', ['color', 'silver'], ['year', 2014]);
console.log(myCar);
