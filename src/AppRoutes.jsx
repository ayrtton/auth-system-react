import { useContext } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./contexts/auth"
import EmailVerificationPage from "./pages/scripts/EmailVerificationPage"
import PrivatePage from "./pages/scripts/PrivatePage"
import LoginPage from "./pages/scripts/LoginPage"
import SignUpPage from "./pages/scripts/SignUpPage"
import HomePage from "./pages/scripts/HomePage"

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
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
                    <Route exact path="/" element={<HomePage />}>
                        <Route exact path=":status/:message" element={<LoginPage />}></Route>
                    </Route>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/signup" element={<SignUpPage />} />
                    <Route exact path="/emailverification" element={<EmailVerificationPage />} />
                    <Route exact path="/privatepage" element={<Private><PrivatePage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes