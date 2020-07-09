function getSolutions(a, b, c) {
    let D = b * b - 4 * a * c;
    let result = {D: D, roots: []};

    if (D === 0) {
        let x1 = -b / (2 * a);
        result.roots = [x1];
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        result.roots = [x1, x2];
    }

    return result;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    switch (result.roots.length) {
        case 0:
            console.log('Уравнение не имеет вещественных корней');
            break;
        case 1:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
            break;
        case 2:
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
            break;
    }
}

function getAverageScore(data) {
    if (!Object.keys(data).length) {
        return {average: 0};
    }

    let result = {};
    let average = [];

    for (let key in data) {
        let value = data[key];
        let averageMark = getAverageMark(value);

        result[key] = averageMark;
        average.push(averageMark);
    }

    result.average = getAverageMark(average);

    return result;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (mark of marks) {
        sum += mark;
    }

    return sum / marks.length;
}

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }

    if (secret === 1) {
        return 'Эмильо';
    }
}