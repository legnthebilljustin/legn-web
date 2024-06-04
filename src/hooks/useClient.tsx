import { STORAGE_KEYS } from "@/constants/keys"
import axios, { AxiosError, AxiosResponse } from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL
const authToken = localStorage.getItem(STORAGE_KEYS.TOKEN);

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export const setAuthorizationHeader = (userToken: string) => {
    client.defaults.headers.common.Authorization = `Bearer ${userToken}`
}

client.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },

    function (error: AxiosError) {
        if (error?.response?.status === 401) {
            window.location.href = "/errors/unauthenticated"
        }
        else if (error.response?.status === 403) {
            window.location.href = "/errors/unauthorized"
        }
        return error;
    }
)