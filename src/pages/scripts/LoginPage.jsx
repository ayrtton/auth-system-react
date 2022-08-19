import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        var errors = login(email, password)

        errors.then(function (data) {
            setErrorMessage(data)
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Login</div>
                <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={styles.textInput} type="password" name="password" id="password" placeholder="Password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <div><a className={styles.forgotPassword + ' ' + styles.link} href="/password/reset/mail">Forgot password?</a></div>
                {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                <input className={styles.button} type="submit" value="Login" />
                <hr />
                <div id={styles.switch}>Don't have an account? <a className={styles.link} href="/signup">Sign Up</a></div>
            </form>
        </div>
    )
}

export default LoginPage