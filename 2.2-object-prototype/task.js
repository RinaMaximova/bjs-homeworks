String.prototype.isPalindrome = function () {
    let str = this.toLowerCase().split(" ").join('');
    let reverseStr = str.split('').reverse().join("");

    return (str === reverseStr)
};

function getAverageMark(marks) {
    let sum = 0,
        average = 0,
        roundedAverage;

    if (!marks.length)
        return average;

    for (let mark of marks.values()) {
        sum += mark;
    }

    average = sum / marks.length;

    roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}