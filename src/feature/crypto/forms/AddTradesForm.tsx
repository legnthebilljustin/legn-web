import { AddNoteIcon } from "@/assets/icons/AddNoteIcon";
import { InputWithValidation, NumberInputWithValidation } from "@/components";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useFormData, useTradeFormValidator } from "@/hooks";
import { TradeFormDataType } from "@/types/crypto";

const TradeFormData: TradeFormDataType = {
    entryPrice: 0,
    amountUSD: 0,
    fee: 0,
    finalCryptoAmount: 0,
    tradeDate: ""
}

export default function AddDepositForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        formData,
        handleInputChange,
        handleNumberInputChange,
        clearFormData
    } = useFormData({ formDataProp: TradeFormData })

    const { validateTradeForm, validationErrors } = useTradeFormValidator();
    

    const handleSubmit = () => {
        const isValidated = validateTradeForm(formData as TradeFormDataType)
        // code here to handle adding trade
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
                                <NumberInputWithValidation
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
                                    type="text"
                                    label="Date" name="tradeDate"
                                    isRequired={true}
                                    value={formData?.tradeDate}
                                    onChange={handleInputChange}
                                    validationError={validationErrors?.tradeDate}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSubmit}>
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