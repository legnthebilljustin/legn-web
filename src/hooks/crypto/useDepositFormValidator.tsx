import { DepositFormData } from "@/types/crypto"
import { FormValidationError } from "@/types/general"
import { isValidDate } from "@/utils/dates"
import { isAnEmptyObject, isANumber, isAValidNonEmptyString } from "@/utils/helpers"
import { useState } from "react"

type ReturnType = {
    validateDepositForm: (formData: DepositFormData) => boolean
    validationErrors: FormValidationError
}

export function useDepositFormValidator(): ReturnType {
    const [validationErrors, setValidationErrors] = useState<FormValidationError>({})

    const validateDepositForm = (formData: DepositFormData): boolean => {
        setValidationErrors({})
        const errors: FormValidationError = {}
        const { depositAmount, exchangeToken, exchangePrice, fee, totalAmount, depositDate } = formData

        if (!isANumber(depositAmount) || depositAmount === 0) {
            errors.depositAmount = "Deposit amount must be a valid number and cannot be 0.";
        }

        if (!isAValidNonEmptyString(exchangeToken)) {
            errors.exchangeToken = "Exchange token must be a valid string." 
        }

        if (!isANumber(exchangePrice)) {
            errors.exchangePrice = "Exchange price must be a number."
        }

        if (!isANumber(fee)) {
            errors.fee = "Exchange price must be a number."
        }

        if (!isANumber(totalAmount)) {
            errors.totalAmount = "Exchange price must be a number."
        }

        if (!isValidDate(depositDate)) {
            errors.depositDate = "Date must be a valid date."
        }


        if (!isAnEmptyObject(errors)) {
            setValidationErrors(errors)
            return false
            
        }

        return true
    }

    return {
        validateDepositForm,
        validationErrors
    }
}