export const isAValidNonEmptyString = (string: string): boolean => string.trim() !== "";

export const isANumber = (number: number): boolean => !isNaN(number)

export const isAnEmptyObject = (obj: object): boolean => Object.keys(obj).length === 0

export const determineInputVariant = (key: any) => key ? "bordered" : "flat";