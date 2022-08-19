import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const PasswordResetMailPage = () => {
    const { sendPasswordResetMail } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [isSent, setIsSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        var errors = sendPasswordResetMail(email)

        errors.then(function (data) {
            if (data !== undefined) {
                setErrorMessage(data)
            } else {
                setIsSent(true)
            }
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Password Reset Email</div>
                <div style={{ display: isSent ? "none" : "block" }}>
                    <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                    <input className={styles.button} type="submit" value="Send" />
                </div>
                <div style={{ display: isSent ? "block" : "none" }}>
                    <p className={styles.center}>Password reset email successfully sent!</p>
                </div>
            </form>
        </div>
    )
}

export default PasswordResetMailPage