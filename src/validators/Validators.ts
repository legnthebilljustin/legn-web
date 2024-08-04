import { ValidationErrors } from "@/constants/validationErrors";
import { isValidDate } from "@/utils/dates";
import { isANumber, isAValidNonEmptyString } from "@/utils/helpers";

/**
 * NOTE:
 * when using these functions for a formData field validation,
 * assign them as arrays so we can define multiple validation rules for each field
 */

type ValidatorFunction = (value: any) => string | null;

export const requiredStringValidator: ValidatorFunction = (value) => {
    return !isAValidNonEmptyString(value) ? ValidationErrors.IS_REQUIRED : null
}

export const requiredNumberValidator: ValidatorFunction = (value) => {
    return !isANumber(value) || value === 0 ? ValidationErrors.INVALID_NUMBER : null;
}
  
export const billingDateValidator: ValidatorFunction = (value) => {
    return !isANumber(value) || value === 0 || value > 31 ? 'Billing date must be from 1 to 31' : null;
}

export const dateValidator: ValidatorFunction = (value) => {
    return !isValidDate(value) ? 'Date must be a valid date.' : null;
}
