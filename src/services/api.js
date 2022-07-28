import axios from "axios"
import { toast } from "react-toastify"

export const api = axios.create({
    baseURL: "https://laravel-heroku-auth.herokuapp.com/api/v1"
})

export const createSession = async (email, password) => {
    return api.post("/login", { email, password }).catch(function (error) {
        if(error.response) {
            toast.error(error.response.data.message, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    })
}

export const getUsers = async () => {
    return api.get("/users")
}