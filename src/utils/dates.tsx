import { parseISO, isValid } from 'date-fns';

type DateReturnType = {
    month: number
    monthString: string
    year: number
    day: number
}

export const convertToReadableDateObject = (dateString: string): DateReturnType => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate()

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthString = monthNames[month - 1]

    return { month, day, year, monthString }
}

export const isValidDate = (dateString: string): boolean => {
    const date = parseISO(dateString);
    return isValid(date);
}