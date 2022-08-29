import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const PasswordResetPage = () => {
    const params = useParams()
    const { resetPassword } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [isReset, setIsReset] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        document.title = "Password Reset"
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        var errors = resetPassword(email, params.token, password, passwordConfirmation)

        errors.then(function (data) {
            setErrorMessage(data)
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Password Reset</div>
                <div style={{ display: isReset ? "none" : "block" }}>
                    <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className={styles.textInput} type="password" name="password" id="password" placeholder="Password" required
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className={styles.textInput} type="password" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" required
                        value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                    <input className={styles.button} type="submit" value="Reset Password" />
                </div>
                <div style={{ display: isReset ? "block" : "none" }}>
                    <p className={styles.center}>Password successfully reset!</p>
                </div>
            </form>
        </div>
    )
}

export default PasswordResetPage