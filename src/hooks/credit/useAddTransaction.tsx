import { useState } from "react"
import { client } from "@/hooks/useClient"
import { TransactionFormData } from "@/types/credit/transaction"

export const useAddTransaction = (onSuccess: any) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmitFail, setDidSubmitFail] = useState(false)

    const addTransaction = async(formData: TransactionFormData, creditCardUuid?: string) => {
        setIsSubmitting(true)
        try {
            const formatted = {
                merchantName: formData.merchantName,
                creditCardUuid: creditCardUuid,
                transactionCategoryUuid: formData.category,
                amount: formData.amount,
                date: formData.date
            }

            await client.post(`/credit/v1/transactions`, formatted)
            onSuccess();
        } catch (error: any) {
            setDidSubmitFail(true)
            throw new Error(error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        addTransaction,
        isSubmitting,
        didSubmitFail
    }
}