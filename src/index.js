// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let change, result = {};
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    if (currency < 0) {
        return result;
    }
    else {
        result.H = currency / 50 | 0;
        change = currency % 50;

        result.Q = change / 25 | 0;
        change %= 25;

        result.D = change / 10 | 0;
        change %= 10;

        result.N = change / 5 | 0;
        change %= 5;

        result.P = change;
        for (key in result) {
            if (result[key] === 0) delete result[key];
        }
        return result;
    }
};
