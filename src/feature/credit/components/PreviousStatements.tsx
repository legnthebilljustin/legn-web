import { useState } from "react"
import StatementCard from "./StatementCard";
import StatementTransactionsAndPayments from "../modals/StatementTransactionsAndPayments";
import { useQuery } from "react-query";
import { fetchStatements } from "@/apis/statements";
import { LoadingIndicator } from "@/components";
import EmptyListMessage from "@/components/alerts/EmptyListMessage";
import { Statement } from "@/types/credit/statements";

type Props = {
    creditCardUuid?: string
}

const PreviousStatements: React.FC<Props> = ({ creditCardUuid }) => {
    const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);
    const [selectedStatementUuid, setSelectedStatementUuid] = useState<string | null>(null)
    const { data: statements, isLoading, isError } = useQuery({
        queryKey: ["statements"],
        queryFn: () => fetchStatements(creditCardUuid)
    })

    const handleOpenStatementDetails = (statementUuid: string) => {
        setSelectedStatementUuid(statementUuid)
        setOpenDetailsModal(true)
    }

    const handleCloseDetailsModal = () => {
        setSelectedStatementUuid("");
        setOpenDetailsModal(false)
    }

    if (isLoading) {
        return <LoadingIndicator label="Fetching your statements..." />
    }

    if (isError) {
        return "We are unable to display your statements at this time. We are currently working on this."
    }

    if (!isLoading && !isError && statements?.data?.length === 0) {
        return <EmptyListMessage message="You have no statements for this credit card yet." />
    }

    return (
        <>
            <div className="carousel-container">
                {statements?.data.map((statement: Statement) => (
                    <StatementCard statement={statement}
                        key={statement.uuid}
                        openStatementDetails={handleOpenStatementDetails}
                    />
                ))}
                
            </div>
            { selectedStatementUuid && (
                <StatementTransactionsAndPayments
                    statementUuid={selectedStatementUuid}
                    openDetails={openDetailsModal}
                    closeDetailsModal={handleCloseDetailsModal}
                />
            )}
        </>
    )
}

export default PreviousStatements