import axios from "axios"

export const api = axios.create({
    baseURL: "https://laravel-heroku-auth.herokuapp.com/api/v1"
})

export const callLoginEndpoint = async (email, password, errors) => {
    return api.post("/login", { email, password }).catch(function (error) {
        if (error.response) {
            errors.value = error.response.data.message
        }
    })
}

export const callSignUpEndpoint = async (name, email, password, password_confirmation, errors) => {
    return api.post("/register", { name, email, password, password_confirmation }).catch(function (error) {
        if (error.response) {
            errors.value = error.response.data.errors
        }
    })
}

export const callResendVerificationMailEndpoint = async() => {
    return api.post("/resend-verification-mail")
}

export const getUsers = async () => {
    return api.get("/users")
}