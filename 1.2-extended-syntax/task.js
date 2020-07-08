function getResult(a, b, c) {
    "use strict";

    let disc = b * b - 4 * a * c;
    let result = [];

    switch (true) {
        case disc < 0:
            break;
        case disc === 0:
            result.push(-b / (2 * a));
            break;
        case disc > 0:
            result.push((-b + Math.sqrt(disc)) / (2 * a));
            result.push((-b - Math.sqrt(disc)) / (2 * a));
    }

    return result;
}

function getAverageMark(marks) {
    let count = marks.length;
    let sum = 0;
    let averageMark;

    if (count === 0) {
        return 0;
    }

    if (count > 5) {
        marks = marks.splice(0, 5);
        count = 5;
    }

    for (mark of marks) {
        sum += mark;
    }

    averageMark = sum / count;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let userYear = dateOfBirthday.getFullYear();
    let dateYear = (new Date()).getFullYear();

    message = (dateYear - userYear) >= 18
        ? `Не желаете ли олд-фэшн, ${name}?`
        : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;


    return message;
}