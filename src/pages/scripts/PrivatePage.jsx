import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const PrivatePage = () => {
    const { logout } = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        logout()
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <span>Welcome {user.name}! You are logged in...</span>
                <button className={styles.button} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default PrivatePage