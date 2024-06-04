import { useMutation } from "react-query";
import { LoginFormData } from "@/pages/Login";
import { User } from "@/types/UserType";
import { client } from "@/hooks/useClient";

type LoginResponse = {
    user: User
}

const postLogin = async(formData: LoginFormData): Promise<LoginResponse> => {
    const { data } = await client.post(`/auth/login`, formData)
    return data;
}

export default function usePostLogin() {
    return useMutation(postLogin)
}