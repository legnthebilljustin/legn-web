import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure,
    Select, SelectItem
} from "@nextui-org/react";
import { TRANSACTION_KEYS } from "@/constants/transactions";
import { AMOUNT_LABEL, CATEGORY_LABEL, DATE_LABEL, MERCHANT_NAME_LABEL } from "@/constants/labels";
import { ChangeEvent, useState } from "react";
import { TransactionFormData } from "@/types/credit/transaction";
import { useTransactionFormValidator } from "@/hooks/credit/useTransactionFormValidator";

type Prop = {
    categories: TransactionCategory[] | [] | undefined
    addTransaction: Function
}

type TransactionCategory = {
    uuid: string
    name: string
}

const AddTransactionForm: React.FC<Prop> = ({ categories, addTransaction }) => {
    const { MERCHANT_NAME, AMOUNT, DATE, CATEGORY } = TRANSACTION_KEYS
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = useState({
        [MERCHANT_NAME]: "",
        [AMOUNT]: "",
        [DATE]: "",
        [CATEGORY]: ""
    })
    const { validateForm, validationErrors } = useTransactionFormValidator();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFormSubmit = () => {
        const formDataWithValues: TransactionFormData = {
            merchantName: formData[MERCHANT_NAME] || "",
            category: formData[CATEGORY] || "",
            amount: Number(formData[AMOUNT]) || 0,
            date: formData[DATE] || ""
        }

        if (validateForm(formDataWithValues)) {
            addTransaction(formDataWithValues)
        }        
    }

    return (
        <>
            <Button color="primary" size="sm" onPress={() => onOpen()}>
                Add a new Transaction
            </Button>
            <Modal backdrop="blur" className="dark py-6" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                New Transaction
                            </ModalHeader>
                            <ModalBody>
                                <Input type="text"
                                    labelPlacement="inside"
                                    label={MERCHANT_NAME_LABEL}
                                    name={MERCHANT_NAME}
                                    onChange={handleInputChange}
                                    value={formData[MERCHANT_NAME]}
                                    variant={validationErrors.merchantName ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.merchantName}
                                    errorMessage={validationErrors.merchantName}
                                />
                                <Select label={CATEGORY_LABEL} className="dark"
                                    name={CATEGORY}
                                    onChange={handleInputChange}
                                    value={formData[CATEGORY]}
                                    variant={validationErrors.category ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.category}
                                    errorMessage={validationErrors.category}
                                >
                                    {categories?.map(category => (
                                        <SelectItem key={category.uuid} value={category.uuid}>
                                            { category.name }
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input type="number"
                                    labelPlacement="inside"
                                    label={AMOUNT_LABEL}
                                    name={AMOUNT}
                                    onChange={handleInputChange}
                                    value={formData[AMOUNT]}
                                    required
                                    variant={validationErrors.amount ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.amount}
                                    errorMessage={validationErrors.amount}
                                />
                                <Input type="date"
                                    labelPlacement="inside"
                                    label={DATE_LABEL}
                                    name={DATE}
                                    onChange={handleInputChange}
                                    value={formData[DATE]}
                                    required
                                    variant={validationErrors.date ? "bordered" : "flat"}
                                    isInvalid={!!validationErrors.date}
                                    errorMessage={validationErrors.date}
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
    );
}

export default AddTransactionForm