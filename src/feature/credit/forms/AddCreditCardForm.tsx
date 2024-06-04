import {
    Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

import { useCreditCardFormValidator } from "@/hooks/credit";
import { CreditCardFormData } from "@/types/credit/card";

type Props = {
    addCreditCard: Function
}

const AddCreditCardForm: React.FC<Props> = ({ addCreditCard }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState<CreditCardFormData>({
        name: "",
        bank: "",
        creditLimit: 0,
        amountPerPoint: 0,
        color: "",
        billingDate: 1
    })
    const { validateForm, validationErrors } = useCreditCardFormValidator();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFormSubmit = () => {
        if (validateForm(formData)) {
            addCreditCard(formData)
        }
    }

    return (
        <>
            <div className="text-md mt-8">Can't find your card?&nbsp;
                <span className="cursor-pointer text-blue-600" onClick={() => onOpen()}>Add it here!</span>
            </div>
            <Modal backdrop="blur" className="dark py-6" isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                New Credit Card
                            </ModalHeader>
                            <ModalBody>
                                <Input type="text"
                                    labelPlacement="inside"
                                    label="Bank"
                                    name="bank"
                                    placeholder="Enter your bank"
                                    onChange={handleInputChange}
                                    value={formData.bank}
                                    variant={validationErrors.bank ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.bank}
                                    errorMessage={validationErrors.bank}
                                />
                                <Input type="text"
                                    labelPlacement="inside"
                                    label="Credit Card Name"
                                    name="name"
                                    placeholder="Enter your credit card name"
                                    onChange={handleInputChange}
                                    value={formData.name}
                                    variant={validationErrors.name ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.name}
                                    errorMessage={validationErrors.name}
                                />
                                <Input type="text"
                                    labelPlacement="inside"
                                    label="Credit Limit"
                                    name="creditLimit"
                                    placeholder="Enter your card's credit limit"
                                    onChange={handleInputChange}
                                    value={formData.creditLimit}
                                    variant={validationErrors.creditLimit ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.creditLimit}
                                    errorMessage={validationErrors.creditLimit}
                                />
                                <Input type="text"
                                    labelPlacement="inside"
                                    label="Amount Per Point"
                                    name="amountPerPoint"
                                    placeholder="Enter your card's amount required for 1 reward point"
                                    onChange={handleInputChange}
                                    value={formData.amountPerPoint}
                                    variant={validationErrors.amountPerPoint ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.amountPerPoint}
                                    errorMessage={validationErrors.amountPerPoint}
                                />
                                <Input type="text"
                                    labelPlacement="inside"
                                    label="Color"
                                    name="color"
                                    placeholder="Enter your desired card color"
                                    onChange={handleInputChange}
                                    value={formData.color}
                                    variant={validationErrors.color ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.color}
                                    errorMessage={validationErrors.color}
                                />
                                <Input type="number"
                                    labelPlacement="inside"
                                    label="Billing Date"
                                    name="billingDate"
                                    placeholder="Enter your card's billing date"
                                    onChange={handleInputChange}
                                    value={formData.billingDate}
                                    variant={validationErrors.billingDate ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.billingDate}
                                    errorMessage={validationErrors.billingDate}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleFormSubmit}>
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

export default AddCreditCardForm