import { useState } from "react"
import { isAnEmptyObject, isANumber, isAValidNonEmptyString } from "@/utils/helpers";
import { ValidationErrors } from "@/constants/validationErrors";
import { TransactionFormData } from "@/types/credit/transaction";

export const useTransactionFormValidator = () => {
    const [validationErrors, setValidationErrors] = useState<any>({});

    const validateForm = (formData: TransactionFormData): boolean => {
        setValidationErrors({})
        let success = true
        const { merchantName, amount, category, date } = formData;
        const errors: { [key: string]: string } = {};
        if (!isAValidNonEmptyString(merchantName)) {
            errors.merchantName = `Merchant Name ${ValidationErrors.INVALID_STRING}`;
        }
        if (!isAValidNonEmptyString(category)) {
            errors.category = `Category ${ValidationErrors.IS_REQUIRED}`;
        }
        if (!isAValidNonEmptyString(date)) {
            errors.date = `Date ${ValidationErrors.INVALID_DATE}`;
        }
        if (!isANumber(amount)) {
            errors.amount = `Amount ${ValidationErrors.INVALID_NUMBER}`;
        }

        if (!isAnEmptyObject(errors)) {
            setValidationErrors(errors)
            success = false
        }

        return success
    }

    return {
        validationErrors,
        validateForm
    }
}