export const convertToCurrency = (number: number) => {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

export const convertToNumber = (number: number) => {
    return number.toLocaleString("en-US");
}