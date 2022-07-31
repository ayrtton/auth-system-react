import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        login(email, password)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Login</div>
                <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={styles.textInput} type="password" name="password" id="password" placeholder="Password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className={styles.button} type="submit" value="Login" />
                <hr />
                <div id={styles.switch}>Don't have an account? <a id={styles.link} href="/signup">Sign Up</a></div>
            </form>
            <ToastContainer limit={1}/>
        </div>
    )
}

export default LoginPage