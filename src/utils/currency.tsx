export const convertToCurrency = (number: number) => {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

export const convertToNumber = (number: number) => {
    return number.toLocaleString("en-US");
}

export const centsToFiat = (number: number) => {
    if (typeof number !== "number") {
        return "Conversion to fiat failed."
    }
    const num = number / 100;
    return num.toLocaleString("en-US", { minimumFractionDigits: 2 }) 
}