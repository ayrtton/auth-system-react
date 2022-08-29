import { useContext } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./contexts/auth"
import EmailVerificationPage from "./pages/scripts/EmailVerificationPage"
import PrivatePage from "./pages/scripts/PrivatePage"
import LoginPage from "./pages/scripts/LoginPage"
import SignUpPage from "./pages/scripts/SignUpPage"
import HomePage from "./pages/scripts/HomePage"
import PasswordResetMailPage from "./pages/scripts/PasswordResetMailPage"
import PasswordResetPage from "./pages/scripts/PasswordResetPage"

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
                        <Route exact path=":status/:message"></Route>
                    </Route>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/signup" element={<SignUpPage />} />
                    <Route exact path="/password/reset/mail" element={<PasswordResetMailPage />} />
                    <Route exact path="/password/reset" element={<PasswordResetPage />}>
                        <Route exact path=":token"></Route>
                    </Route>
                    <Route exact path="/email/verification" element={<Private><EmailVerificationPage /></Private>} />
                    <Route exact path="/privatepage" element={<Private><PrivatePage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes