import axios from "axios"

export const api = axios.create({
    baseURL: "https://laravel-heroku-auth.herokuapp.com/api/v1"
})

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
}

export const getUsers = async () => {
    return api.get("/users")
}