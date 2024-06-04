import { fetchTransactionCategories } from "@/apis/transactions"
import { useQuery } from "react-query"

type Categories = {
    uuid: string
    name: string
}

type ReturnTypes = {
    categories: Categories[] | [] | undefined
    isFetchingCategories: boolean
    isFetchCategoriesFail: boolean
    fetchCategoriesError: string
}

export function useFetchCategories(): ReturnTypes {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: () => fetchTransactionCategories()
    })

    return {
        categories: isLoading ? [] : data,
        isFetchingCategories: isLoading,
        isFetchCategoriesFail: isError,
        fetchCategoriesError: "Unable to fetch transaction categories" 
    }
}
