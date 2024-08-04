import { TradeFormDataType } from "@/types/crypto"
import { FormValidationError } from "@/types/general"
import { FormValidator } from "@/validators/FormValidators"
import { dateValidator, requiredNumberValidator, requiredStringValidator } from "@/validators/Validators"
import { useState } from "react"

type ReturnType = {
    validateTradeForm: (formData: TradeFormDataType) => boolean
    validationErrors: FormValidationError
}

export function useTradeFormValidator(): ReturnType {
    const [validationErrors, setValidationErrors] = useState<FormValidationError>({})

    const validateTradeForm = (formData: TradeFormDataType) => {
        // READ NOTE IN Validators.ts, to know why we are assigning the validators in an array
        const fieldValidators = {
            cryptoUuid: [requiredStringValidator],
            entryPrice: [requiredNumberValidator],
            amountUSD: [requiredNumberValidator],
            fee: [requiredNumberValidator],
            receivedCryptoAmount: [requiredNumberValidator],
            finalCryptoAmount: [requiredNumberValidator],
            tradeDate: [dateValidator]
        }

        const validator = new FormValidator(fieldValidators)
        const errors = validator.validate(formData)
        const isValidated = !validator.hasErrors()
        setValidationErrors(errors)

        return isValidated
    }

    return {
        validateTradeForm, validationErrors
    }
}