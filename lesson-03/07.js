const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

numbers.forEach((numArray, index) => {
    numbers[index] = numArray.filter((num) => {
        if (num % 2 === 0) {
            return num;
        }
    });
});

console.log(numbers);
