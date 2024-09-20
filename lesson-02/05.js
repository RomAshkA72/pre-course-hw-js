let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = structuredClone(passport);

newPassport.name = "Ivan";

console.log(passport);
console.log(newPassport);

