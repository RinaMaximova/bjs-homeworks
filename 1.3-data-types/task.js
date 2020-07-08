function calculateTotalMortgage(percent, contribution, amount, date) {
    if (typeof percent !== 'number' && typeof percent !== 'string')
        return `Параметр percent содержит неправильное значение ${percent}`;

    if (typeof contribution !== 'number' && typeof contribution !== 'string')
        return `Параметр contribution содержит неправильное значение ${contribution}`;

    if (typeof amount !== 'number' && typeof amount !== 'string')
        return `Параметр amount содержит неправильное значение ${amount}`;

    currentDate = new Date();

    contribution = parseInt(contribution);
    percent = parseInt(percent);
    amount = parseInt(amount);

    mortgagePercent = percent / 100 / 12;
    mortgageAmount = amount - contribution;
    mortgageMonths = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));

    mortgageResult = (mortgageAmount * (mortgagePercent + mortgagePercent / (((1 + mortgagePercent) ** mortgageMonths) - 1))) * mortgageMonths;

    return new Number(mortgageResult.toFixed(2));
}

function getGreeting(name) {
   name = name || 'Аноним';

   return `Привет, мир! Меня зовут ${name}`
}