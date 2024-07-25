function avg(numbers) {
    if (numbers.length === 0) {
        throw new Error('Array must contain at least one number.');
    }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

module.exports = avg;
