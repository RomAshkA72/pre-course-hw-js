let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = structuredClone(passport);

newPassport.name = "Ivan";

console.log(passport.name);
console.log(newPassport.name);

