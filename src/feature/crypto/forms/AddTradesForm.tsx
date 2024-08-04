import { AddNoteIcon } from "@/assets/icons/AddNoteIcon";
import { ErrorMessage, InputWithValidation, NumberInputWithValidation } from "@/components";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useFormData, useTradeFormValidator } from "@/hooks";
import { TradeFormDataType } from "@/types/crypto";
import { useMutation } from "react-query";
import { postTrade } from "@/apis/trades";

type Props = {
    cryptoUuid: string
}

const initialTradeFormData: TradeFormDataType = {
    cryptoUuid: "",
    entryPrice: 0,
    amountUSD: 0,
    fee: 0,
    receivedCryptoAmount: 0,
    finalCryptoAmount: 0,
    tradeDate: ""
}

export default function AddTradesForm({ cryptoUuid }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialFormData = {...initialTradeFormData, cryptoUuid}
    const {
        formData,
        handleInputChange,
        handleNumberInputChange,
        clearFormData
    } = useFormData({ formDataProp: initialFormData })

    const { validateTradeForm, validationErrors } = useTradeFormValidator();
    const { isLoading, isError, mutate } = useMutation(postTrade)

    const handleSubmit = (): void => {
        const isValidated = validateTradeForm(formData as TradeFormDataType)
        if (isValidated) {
            mutate(formData as TradeFormDataType, {
                onSuccess: () => {
                    clearFormData();
                    onClose();
                },
                onError: (error: any) => {
                    alert(error?.message)
                }
            })
        }
    }

    return (
        <>
            <div className="text-right mb-4">
                <Button color="primary" size="sm" variant="shadow"
                    startContent={<AddNoteIcon />} onClick={onOpen}
                >
                    Add Trade
                </Button>
            </div>
            <Modal backdrop="blur" size="md" className="dark py-6" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Add trade</ModalHeader>
                            <ModalBody>
                                { isError && <ErrorMessage error="Failed to add new trade." /> }
                                <NumberInputWithValidation
                                    type="text"
                                    label="Entry Price" name="entryPrice"
                                    isRequired={true}
                                    value={formData?.entryPrice}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.entryPrice}
                                />
                                <NumberInputWithValidation
                                    label="Purchased Amount (USD)" name="amountUSD"
                                    isRequired={true}
                                    value={formData?.amountUSD}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.amountUSD}
                                />
                                <NumberInputWithValidation
                                    label="Received Crypto Amount" name="receivedCryptoAmount"
                                    isRequired={true}
                                    value={formData?.receivedCryptoAmount}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.receivedCryptoAmount}
                                />
                                <NumberInputWithValidation
                                    label="Fee" name="fee"
                                    isRequired={true}
                                    value={formData?.fee}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.fee}
                                />
                                <NumberInputWithValidation
                                    label="Final Crypto Amount" name="finalCryptoAmount"
                                    isRequired={true}
                                    value={formData?.finalCryptoAmount}
                                    onChange={handleNumberInputChange}
                                    validationError={validationErrors?.finalCryptoAmount}
                                />
                                <InputWithValidation
                                    type="date"
                                    label="Date" name="tradeDate"
                                    isRequired={true}
                                    value={formData?.tradeDate}
                                    onChange={handleInputChange}
                                    validationError={validationErrors?.tradeDate}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}
                                    isDisabled={isLoading}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSubmit}
                                    isDisabled={isLoading}
                                >
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