import { Button, Card, CardBody, Input } from "@nextui-org/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import useLoginFormValidator from "@/hooks/auth/useLoginFormValidator"
import usePostLogin from "@/hooks/auth/usePostLogin"
import { determineInputVariant, isAnEmptyObject } from "@/utils/helpers"
import { useAuth } from "@/components/auth/AuthProvider"

export type LoginFormData = {
    email: string
    password: string
}

const Login: React.FC<{}> = () => {
    const { updateUser } = useAuth();
    const [ formData, setFormData ] = useState<LoginFormData>({
        email: "", password: ""
    })
    const { validateFormData, validationErrors } = useLoginFormValidator();
    const { isLoading, isError, data, mutate } = usePostLogin()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = useCallback(() => {
        validateFormData(formData);
      
        if (!isAnEmptyObject(validationErrors)) {
          return;
        }
      
        mutate(formData);
      }, [formData, validateFormData, mutate, validationErrors]);
    
    useEffect(() => {
        if (data && data.user) {
            updateUser(data.user)
            window.location.href = "/creditCards"
        }
        
    }, [data])

    return (
        <main className='dark text-foreground'>
		    <div className="container p-6 flex justify-center">
                <Card className="max-w-md w-full">
                    <CardBody className="p-6 text-center">
                        <div className="mt-12 mb-12 text-2xl font-bold">Log In</div>
                        <form className="px-8">
                            <Input className="my-4"
                                key="email"
                                type="email"
                                label="Email"
                                name="email"
                                labelPlacement="inside"
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                                isInvalid={!!validationErrors.email}
                                variant={determineInputVariant(validationErrors.email)}
                                errorMessage={validationErrors.email}
                            />
                            <Input className="my-4"
                                key="password"
                                type="password"
                                label="Password"
                                name="password"
                                labelPlacement="inside"
                                placeholder="Enter your password"
                                onChange={handleInputChange}
                                isInvalid={!!validationErrors.password}
                                variant={determineInputVariant(validationErrors.password)}
                                errorMessage={validationErrors.password}
                            />
                            { (isError) ?
                                <div className="text-sm text-red-400">
                                   Invalid credentials.
                                </div>
                                : ""
                            }
                            <div className="text-sm text-blue-400 mt-12">Forgot Password?</div>
                            <Button color="primary" isLoading={isLoading}
                                className="w-full mt-2 mb-12"
                                onClick={handleSubmit}
                            >Log In</Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
	    </main>
        
    )
}

export default Login