let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newProperty = {married: true};
let passportMarried2 = {};

for (let key of ['name', 'surname']){
    passportMarried2[key] = passportMarried[key];
}

passportMarried2 = {...passportMarried2, ...newProperty};

for (let key of ["address"]){
    passportMarried2[key] = passportMarried[key];
}

console.log(passportMarried);
console.log(passportMarried2);

