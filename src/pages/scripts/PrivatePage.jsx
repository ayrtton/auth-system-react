import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

const PrivatePage = () => {
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <p>Under Construction...</p>
        </>
    )
}

export default PrivatePage