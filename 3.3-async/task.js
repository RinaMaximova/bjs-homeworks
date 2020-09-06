class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Не передан id')
        }

        if (this.findAlarmById(id)) {
            console.error('Такой звонок уже есть');
            return;
        }

        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback
        })
    }

    findAlarmById(id) {
        return this.alarmCollection.find(element => {
            return element.id === id;
        })
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(element => {
            return element.id !== id;
        });
    }

    getCurrentFormattedTime() {
        let date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

        return hours + ":" + minutes;
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((element) => {
                    this.checkClock(element)
                });
            }, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log(element.id, element.time);
        });
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}