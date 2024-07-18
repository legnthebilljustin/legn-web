import { DEPOSITS_TABLE_COLUMNS } from "@/constants/cryptolabels";
import { Deposit } from "@/types/crypto";
import { centsToFiat } from "@/utils/currency";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

type Props = {
    deposits: Deposit[]
}

export default function DepositsTable({ deposits }: Props) {
    return (
        <div className="my-2">
            <Table aria-label="Deposits table">
                <TableHeader columns={DEPOSITS_TABLE_COLUMNS}>
                    {(column) => (
                        <TableColumn>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={deposits}>
                    {(item: Deposit) => (
                        <TableRow key={item.uuid}>
                            <TableCell className="dmsans-regular text-sm capitalize">
                                Php { item?.depositAmount ? centsToFiat(item.depositAmount) : "0.00" }
                            </TableCell>
                            <TableCell className="flex text-sm">
                                <span>$ { item?.exchangePrice ? centsToFiat(item.exchangePrice) : "0.00" }</span>&nbsp;
                                <span className="text-default-400">{ item?.exchangeToken ? item.exchangeToken : "Undefined token" }</span>
                            </TableCell>
                            <TableCell>
                                Php { item?.fee ? centsToFiat(item.fee) : "0.00" }
                            </TableCell>
                            <TableCell>
                                $ { item?.totalAmount ? centsToFiat(item.totalAmount) : "0.00" }
                            </TableCell>
                            <TableCell>
                                { item?.depositDate ? item.depositDate : "-" }
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}