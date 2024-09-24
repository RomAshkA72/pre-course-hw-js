const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((color) => {
        if (color == "черный" || color == "красный" || color == "желтый") {
            return color
        }
    }).join("-");
}

console.log(createColorString());