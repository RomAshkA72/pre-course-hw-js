let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {
    name: passportMarried.name,
    surname: passportMarried.surname, 
};

passportMarried2.married = true;


passportMarried2.address = {
    ...passportMarried.address
};


console.log(passportMarried);
console.log(passportMarried2);



