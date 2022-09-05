import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const EmailVerificationPage = () => {
    const { resendVerificationMail, logout } = useContext(AuthContext)
    const [isSent, setIsSent] = useState(false)

    useEffect(() => {
        document.title = "Email Verification"
    }, [])

    const handleEmailSending = () => {
        resendVerificationMail()

        setIsSent(true)
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div style={{ display: isSent ? "none" : "block" }}>
                    Thanks for signing up!
                    <p>
                        Before getting started, could you verify your email
                        address by clicking on the link we just emailed to you?
                    </p>
                    If you didn't receive the email, we will gladly&nbsp;
                    <span className={styles.link} onClick={handleEmailSending}>send you another</span>.
                </div>
                <div style={{ display: isSent ? "block" : "none" }}>
                    <p className={styles.center}>Verification email successfully sent!</p>
                </div>
                <div class={styles.center}>
                    <button className={styles.button} onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default EmailVerificationPage