const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

numbers.forEach((numArray) => {
    numArray.forEach((num, index) => {
        numArray.filter((num) => {
            if (num % 2 != 0) {
                return num;
            }
        });
        numArray.splice(index, 1);
    });
});

console.log(numbers);
