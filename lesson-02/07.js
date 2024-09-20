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
    married: true,
    address: {
        ...passportMarried.address
    }
}



