export type Statement = {
    uuid: string
    statementDate: string
    amountDue: number
    dueDate: string
}

export type PaginatedStatementsResponse<Statement> = {
    current_page: number
    data: Statement[]
    first_page_url: string;
    from: null | number;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: null | number;
}