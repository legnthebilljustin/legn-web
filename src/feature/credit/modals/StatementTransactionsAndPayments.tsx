import { Transaction } from "@/types/credit/transaction";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, useDisclosure,  } from "@nextui-org/react";
import TransactionCard from "../components/TransactionCard";
import { useQuery } from "react-query";
import { fetchStatementTransactionsAndPayments } from "@/apis/statements";
import ErrorAlert from "@/components/alerts/ErrorAlert";

type Props = {
    statementUuid: string | null
    openDetails: boolean
    closeDetailsModal: () => void
}

const StatementTransactionsAndPayments: React.FC<Props> = ({ statementUuid, openDetails, closeDetailsModal }) => {
    const { onClose } = useDisclosure();

    const { data: transactions = [], isLoading, isError } = useQuery({
        queryKey: ["transactionsAndPayments"],
        queryFn: () => {
            if (statementUuid) {
                return fetchStatementTransactionsAndPayments(statementUuid)
            }
        }
    });
    
    const handleClose = () => {
        closeDetailsModal();
        onClose();
    }

    return (
        <Modal size="5xl" backdrop="blur" className="dark py-6" isOpen={openDetails} onClose={handleClose}>
            <ModalContent>
                <ModalHeader className="text-center dmsans-regular">
                    Statement of Account for April 2024
                </ModalHeader>
                <ModalBody>
                    { isLoading ? <Spinner size="lg" /> :
                        isError ? <ErrorAlert message="We are unable to display your transactions for this statement at this moment." /> :
                        <>
                            <div className="text-gray-500 dmsans-regular">Transactions</div>
                            { transactions.map((transaction: Transaction) => <TransactionCard key={transaction.uuid} transaction={transaction} />) }
                        </>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default StatementTransactionsAndPayments