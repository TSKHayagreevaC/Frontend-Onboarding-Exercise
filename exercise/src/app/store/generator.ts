export interface Car {name: string, model: string, yearOfRelease: number, brand: string, color: string}

export const generateRandomCars = (count:number) => {

    let cars: Car[] = [];

    const names = ['Mini', 'Suv', 'Sedon', 'Sports', 'OpenTop', '7Seater', 'Beast', 'TopModel', 'MostRunning'];

    const brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Nissan'];

    const models = ['Camry', 'Accord', 'F-150', 'Silverado', '3 Series', 'C-Class', 'A4', 'Model S', 'Altima'];

    const colors = ['Grey', 'Magneta', 'Silver', 'Black', 'Red', 'Blue']

    const yearOfRelease = 1990;

    const currentYear = 2024;

    for (let i = 0; i < count; i++) {

        const name = names[Math.floor(Math.random() * names.length)];

        const model = models[Math.floor(Math.random() * models.length)];

        const brand = brands[Math.floor(Math.random() * brands.length)];

        const year = Math.floor(Math.random() * (currentYear - yearOfRelease + 1)) + yearOfRelease;

        const color = colors[Math.floor(Math.random() * colors.length)];

        const newCar:Car = {

            name: name,

            model: model,

            yearOfRelease: year,

            brand: brand,

            color: color

        };

        cars.push(newCar);

    }

    return cars;

}

  