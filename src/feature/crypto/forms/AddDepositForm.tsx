import { postDeposit } from "@/apis/deposits";
import { AddNoteIcon } from "@/assets/icons/AddNoteIcon";
import { ErrorMessage, InputWithValidation, NumberInputWithValidation } from "@/components";
import { DEPOSIT_AMOUNT_KEY, DEPOSIT_AMOUNT_LABEL, DEPOSIT_DATE_KEY, DEPOSIT_DATE_LABEL, FEE_KEY, FEE_LABEL, TOTAL_AMOUNT_KEY, TOTAL_AMOUNT_LABEL } from "@/constants/cryptolabels";
import { useFormData } from "@/hooks";
import { useDepositFormValidator } from "@/hooks/crypto/useDepositFormValidator";
import { DepositFormData } from "@/types/crypto";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useMutation } from "react-query";

const initialDepositFormData: DepositFormData = {
    depositAmount: 0,
    exchangeToken: "USDT",
    exchangePrice: 0,
    fee: 0,
    totalAmount: 0,
    depositDate: ""
}

export default function AddDepositForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { 
        formData ,
        handleInputChange,
        handleNumberInputChange,
        clearFormData
    } = useFormData({ formDataProp: initialDepositFormData })
    const { validateDepositForm, validationErrors } = useDepositFormValidator()
    const { 
        isLoading: isCreatingDeposit, 
        isError: createDepositFailed,
        mutate 
    } = useMutation(postDeposit);

    const handleSubmit = () => {
        /**
         * cast formData into DepositFormData since it will conform to it in this component
         * to prevent the ts error type `formDataMap` is not assignable to `DepositFormData`
         * caused by the TS Utility Record in the `useFormData` hook
         */
        const isValidated = validateDepositForm(formData as DepositFormData)
        if (isValidated) {
            mutate(formData as DepositFormData, {
                onSuccess: () => {
                    clearFormData(initialDepositFormData)
                    onClose()
                }
            })
        }
    }

    return (
        <>
            <div className="text-right">
                <Button color="primary" size="sm" className="my-2"
                    startContent={<AddNoteIcon />} onClick={onOpen}
                >
                    Add Deposit
                </Button>
            </div>
            <Modal backdrop="blur" size="md" className="dark py-6" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>New Deposit</ModalHeader>
                            <ModalBody>
                                {/* 
                                    Note: converting numbers into string because NextUI Input component does not work well with numbers 
                                */}
                                <InputWithValidation
                                    type="text"
                                    label="Exchange Token" name="exchangeToken"
                                    isRequired={true}
                                    value={formData.exchangeToken}
                                    onChange={handleInputChange}
                                    validationError={validationErrors?.exchangeToken}
                                    isDisabled={isCreatingDeposit}
                                />
                                <NumberInputWithValidation
                                    label={DEPOSIT_AMOUNT_LABEL} 
                                    name={DEPOSIT_AMOUNT_KEY}
                                    isRequired={true}
                                    value={formData.depositAmount.toString()}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.depositAmount}
                                    isDisabled={isCreatingDeposit}
                                />
                                <NumberInputWithValidation
                                    type="text"
                                    label="Exchange Price" name="exchangePrice"
                                    isRequired={true}
                                    value={formData.exchangePrice.toString()}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.exchangePrice}
                                    isDisabled={isCreatingDeposit}
                                />
                                <NumberInputWithValidation
                                    type="text"
                                    label={FEE_LABEL} name={FEE_KEY}
                                    isRequired={true}
                                    value={formData.fee.toString()}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.fee}
                                />
                                <NumberInputWithValidation
                                    type="text"
                                    label={TOTAL_AMOUNT_LABEL} name={TOTAL_AMOUNT_KEY}
                                    isRequired={true}
                                    value={formData.totalAmount.toString()}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.totalAmount}
                                    isDisabled={isCreatingDeposit}
                                />
                                <InputWithValidation
                                    type="date"
                                    label={DEPOSIT_DATE_LABEL} name={DEPOSIT_DATE_KEY}
                                    isRequired={true}
                                    value={formData.depositDate.toString()}
                                    onChange={handleInputChange}
                                    validationError={validationErrors?.depositDate}
                                    isDisabled={isCreatingDeposit}
                                />
                            </ModalBody>
                            <ModalFooter>
                                { createDepositFailed && <ErrorMessage error="Failed to create deposit." />}
                                <Button color="danger" variant="light" onPress={onClose} isDisabled={isCreatingDeposit}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSubmit} isDisabled={isCreatingDeposit}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}