import { useState } from "react";
import { LoginFormData } from "@/pages/Login";
import { isAValidNonEmptyString } from "@/utils/helpers";

type LoginValidationErrors = {
    email?: string
    password?: string
}

type LoginFormValidatorReturnType = {
    validationErrors: LoginValidationErrors;
    validateFormData: (data: LoginFormData) => void;
}

export default function useLoginFormValidator(): LoginFormValidatorReturnType {
    const [validationErrors, setValidationErrors] = useState<LoginValidationErrors>({})
    
    const validateFormData = ({ email, password }: LoginFormData) => {
        setValidationErrors({})
        validateEmail(email)
        validatePassword(password)
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                email: "Email cannot be empty and must be a valid email"
            }))
        }
    }

    const validatePassword = (password: string) => {
        if (!isAValidNonEmptyString(password)) {
            return setValidationErrors(prevErrors => ({
                ...prevErrors,
                password: "Password is required."
            }))
        }
        const trimmed = password.trim()
        if (trimmed.length < 8 || trimmed.length > 16) {
            setValidationErrors(prevErrors => ({
                ...prevErrors,
                password: "Password must be 8-16 characters only."
            }))
        }
    }

    return {
        validationErrors,
        validateFormData
    }
}