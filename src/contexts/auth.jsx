import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api, callLoginEndpoint, callSignUpEndpoint } from "../services/api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }

        setLoading(false)
    }, [])

    const redirectUser = (response) => {
        const loggedUser = response.data.user
        const token = response.data.token

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)
        navigate("/")
    }

    const login = async (email, password) => {
        const errors = { value: "" }
        const response = await callLoginEndpoint(email, password, errors)

        if (response) {
            redirectUser(response)
        } else {
            return errors.value
        }
    }

    const signUp = async (name, email, password, passwordConfirmation) => {
        const errors = { value: "" }
        const response = await callSignUpEndpoint(name, email, password, passwordConfirmation, errors)

        if (response) {
            redirectUser(response)
        } else {
            return errors.value
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")

        api.defaults.headers.Authorization = null
        setUser(null)

        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    )
}