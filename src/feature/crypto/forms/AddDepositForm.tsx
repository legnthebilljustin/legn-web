import { AddNoteIcon } from "@/assets/icons/AddNoteIcon";
import { InputWithValidation } from "@/components";
import { DEPOSIT_AMOUNT_KEY, DEPOSIT_AMOUNT_LABEL, DEPOSIT_DATE_KEY, DEPOSIT_DATE_LABEL, TOTAL_AMOUNT_KEY, TOTAL_AMOUNT_LABEL } from "@/constants/tableheaders";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function AddDepositForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // this should be a custom hook
    const handleInputChange = () => {

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
                                <InputWithValidation
                                    type="text"
                                    label={DEPOSIT_AMOUNT_LABEL} name={DEPOSIT_AMOUNT_KEY}
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Exchange Token" name="exchangeToken"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Exchange Price" name="exchangePrice"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label={TOTAL_AMOUNT_LABEL} name={TOTAL_AMOUNT_KEY}
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label={DEPOSIT_DATE_LABEL} name={DEPOSIT_DATE_KEY}
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={() => ""}>
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