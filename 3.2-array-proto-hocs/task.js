function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {
    }
}


function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i])
}


function memorize(fn, limit) {
    let memory = [];

    return (...args) => {
        for (let i = 0; i < memory.length; i++) {
            if (compareArrays(memory[i].args, args)) {
                return memory[i].result;
            }
        }

        let result = fn(...args);

        memory.push({args, result});

        if (memory.length > +(limit)) {
            memory = memory.slice(-(limit));
        }

        return result;
    };
}