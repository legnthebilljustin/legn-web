import { Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { LoadingIndicator } from "@/components";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import { useMutation, useQuery } from "react-query";
import { addCreditCard, fetchCreditCards } from "@/apis/creditCards";
import { CreditCard, CreditCardFormData } from "@/types/credit/card";
import AddCreditCardForm from "@/feature/credit/forms/AddCreditCardForm";

export default function CreditCards() {
    const { data: creditCards, isLoading: isFetchingCards, isError: fetchError } = useQuery({
        queryKey: ["creditCardsList"],
        queryFn: () => fetchCreditCards()
    })
    const { mutate, isLoading: isCreatingCard, isError: createError } = useMutation({
        mutationFn: (formData: CreditCardFormData) => addCreditCard(formData)
    })
    
    const handleAddCreditCard = (formData: CreditCardFormData) => {
        mutate(formData)
    }

    if (isFetchingCards) {
        return <LoadingIndicator label="Getting your cards..." />
    }

    if (isCreatingCard) {
        return <LoadingIndicator label="Creating new card..." />
    }

    if (!isFetchingCards && fetchError) {
        return <ErrorAlert message="We are unable to fetch your credit cards at this time." />
    }

    if (!isCreatingCard && createError) {
        return <ErrorAlert message="" />
    }
    
    return (
        <div className="w-full px-4 flex justify-center">
            <div className="mt-8 max-w-lg text-center">
                <h1 className="text-lg mb-6 font-bold">Select Card</h1>
                {
                    creditCards?.map((card: CreditCard) => (
                        <Link key={card.uuid} to={`/creditCards/${card.uuid}`}>
                            <Card
                                fullWidth={false}
                                className="my-2 px-5 w-auto cursor-pointer"
                            >
                                <CardBody className="text-white text-center">
                                    { card.name }
                                </CardBody>
                            </Card>
                        </Link>
                        
                    ))
                }
                <AddCreditCardForm addCreditCard={handleAddCreditCard} />
            </div>
        </div>
    )
}