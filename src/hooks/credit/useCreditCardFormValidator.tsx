import { ValidationErrors } from "@/constants/validationErrors"
import { CreditCardFormData } from "@/types/credit/card"
import { isAnEmptyObject, isANumber, isAValidNonEmptyString } from "@/utils/helpers"
import { useState } from "react"

export function useCreditCardFormValidator() {
    const [validationErrors, setValidationErrors] = useState<any>({})
    
    const validateForm = (formData: CreditCardFormData) => {
        setValidationErrors({})
        let success = true
        const { bank, name, creditLimit, amountPerPoint, color, billingDate } = formData
        const errors: { [key: string]: string } = {};

        if (!isAValidNonEmptyString(bank)) {
            errors.bank = `Bank ${ValidationErrors.IS_REQUIRED}`
        }
        if (!isAValidNonEmptyString(name)) {
            errors.name = `Credit card name ${ValidationErrors.IS_REQUIRED}`
        }
        if (!isANumber(creditLimit) || creditLimit === 0) {
            errors.creditLimit = `Credit Limit ${ValidationErrors.IS_REQUIRED} and ${ValidationErrors.INVALID_NUMBER}`
        }
        if (!isANumber(amountPerPoint) || amountPerPoint === 0) {
            errors.amountPerPoint = `Amount Per Point ${ValidationErrors.IS_REQUIRED}`
        }
        if (!isAValidNonEmptyString(color)) {
            errors.color = `Color ${ValidationErrors.IS_REQUIRED}`
        }
        if (!isANumber(billingDate) || billingDate === 0 || billingDate > 31) {
            errors.billingDate = `Billing date must be from 1 to 31`
        }

        if (!isAnEmptyObject(errors)) {
            setValidationErrors(errors)
            success = false
        }

        return success
    }

    return {
        validateForm,
        validationErrors
    }
}