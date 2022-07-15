import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContext } from './contexts/auth'
import HomePage from './pages/jsx/HomePage'
import LoginPage from './pages/jsx/LoginPage'

const AppRoutes = () => {
    return (
        <Router>
            <AuthContext.Provider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />}></Route>
                    <Route exact path='/' element={<HomePage />}></Route>
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}

export default AppRoutes