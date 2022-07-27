import { useContext } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./contexts/auth"
import HomePage from "./pages/jsx/HomePage"
import LoginPage from "./pages/jsx/LoginPage"

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading) {
            return <div className="loading">Loading...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />}></Route>
                    <Route exact path="/" element={<Private><HomePage /></Private>}></Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes