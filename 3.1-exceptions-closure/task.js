//Задача 3.1.1
function parseCount(toParse) {
    let integer = Number.parseInt(toParse);

    if (Number.isNaN(integer)) {
        throw new Error('Невалидное значение');
    }

    return integer;
}

function validateCount(toParse) {
    try {
        return parseCount(toParse)
    } catch (e) {
        return e;
    }
}

//Задача 3.1.2
class Triangle {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.checkSides();
    }

    checkSides() {
        if (this.x + this.y > this.z && this.x + this.z > this.y && this.y + this.z > this.x) {
            return;
        }

        throw new Error('Треугольник с такими сторонами не существует')
    }

    getPerimeter() {
        return this.x + this.y + this.z;
    }

    getHalfPerimeter() {
        return this.getPerimeter() / 2;
    }

    getArea() {
        return parseFloat(Math.sqrt(this.getHalfPerimeter() * (this.getHalfPerimeter() - this.x) * (this.getHalfPerimeter() - this.y) * (this.getHalfPerimeter() - this.z)).toFixed(3));
    }
}

function getTriangle(x, y, z) {
    try {
        return new Triangle(x, y, z);
    } catch (e) {
        return {
            getArea: function () {
                return 'Ошибка! Треугольник не существует'
            },
            getPerimeter: function () {
                return 'Ошибка! Треугольник не существует'
            },
        }
    }
}