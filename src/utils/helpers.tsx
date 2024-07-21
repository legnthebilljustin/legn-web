export const isAValidNonEmptyString = (string: string): boolean => typeof string === "string" ? string.trim() !== "" : false;

export const isANumber = (number: number): boolean => !isNaN(number)

export const isAnEmptyObject = (obj: object): boolean => {
    if (obj !== null && typeof obj === "object") {
        return Object.keys(obj).length === 0
    }
    return false;
}

export const determineInputVariant = (key: any) => key ? "bordered" : "flat";