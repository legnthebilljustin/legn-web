import { AddNoteIcon } from "@/assets/icons/AddNoteIcon";
import { InputWithValidation } from "@/components";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function AddDepositForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleInputChange = () => {

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
                                <InputWithValidation
                                    type="text"
                                    label="Entry Price" name="entryPrice"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Purchased Amount" name="purchasedAmount"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Fee" name="fee"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Final Crypto Amount" name="finalCryptoAmount"
                                    isRequired={true}
                                    value={"awdsa"}
                                    onChange={handleInputChange}
                                    validationError=""
                                />
                                <InputWithValidation
                                    type="text"
                                    label="Date" name="purchaseDate"
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