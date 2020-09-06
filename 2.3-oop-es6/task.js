// Задача 2.3.1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            state = 0;
        } else if (state > 100) {
            state = 100;
        }

        this._state = state;
    }

    get state() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задача 2.3.2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = null;

        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];

            if (book[type] === value) {
                result = this.books[i];
            }
        }

        return result;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name', bookName);

        if (book !== null) {
            this.removeBookByName(bookName);
        }

        return book;
    }

    removeBookByName(bookToRemove) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];

            if (book.name === bookToRemove) {
                this.books.splice(i, 1);
            }
        }
    }
}

// Задача 2.3.3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (typeof grade === 'string' || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        }

        if (typeof this.grades[subject] === "undefined") {
            this.grades[subject] = [];
        }

        this.grades[subject].push(grade);

        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {
        let grades = this.grades[subject] || [];

        return this.getAverageMark(grades);
    }

    getTotalAverage() {
        let marks = [];

        for (let subject in this.grades) {
            marks.push(this.getAverageBySubject(subject))
        }

        return this.getAverageMark(marks);
    }

    getAverageMark(marks) {
        let sum = 0, average = 0;

        if (!marks.length)
            return average;

        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        average = sum / marks.length;

        return average;
    }
}