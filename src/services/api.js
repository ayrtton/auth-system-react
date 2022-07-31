import axios from "axios"
import { toast } from "react-toastify"

export const api = axios.create({
    baseURL: "https://laravel-heroku-auth.herokuapp.com/api/v1"
})

const displayToast = (error) => {
    toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export const callLoginEndpoint = async (email, password) => {
    return api.post("/login", { email, password }).catch(function (error) {
        if (error.response) {
            displayToast(error.response.data.message)
        }
    })
}

export const callSignUpEndpoint = async (name, email, password, password_confirmation) => {
    return api.post("/register", { name, email, password, password_confirmation })
}

export const getUsers = async () => {
    return api.get("/users")
}