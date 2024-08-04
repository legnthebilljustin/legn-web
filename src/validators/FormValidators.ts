type ValidatorFunction = (value: any) => string | null

export class FormValidator {
    private errors: { [key: string]: string } = {}

    constructor(private fieldValidators: { [key: string]: ValidatorFunction[] }) {}

    private validateField(
        value: any,
        validators: ValidatorFunction[],
    ): string | null {
        for (const validator of validators) {
            const error = validator(value)
            if (error) return error
        }
        return null
    }

    validate(formData: any): { [key: string]: string } {
        this.errors = {}
        for (const field in this.fieldValidators) {
            const error = this.validateField(formData[field], this.fieldValidators[field])
            if (error) this.errors[field] = error;
        }

        return this.errors;
    }

    

    hasErrors(): boolean {
        return Object.keys(this.errors).length > 0;
    }

    getErrors(): { [key: string]: string } {
        return this.errors;
    }
}