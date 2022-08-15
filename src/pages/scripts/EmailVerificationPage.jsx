import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const EmailVerificationPage = () => {
    const { resendVerificationMail } = useContext(AuthContext)
    const [ isSent, setIsSent] = useState(false)

    const handleClick = () => {
        resendVerificationMail()

        setIsSent(true)
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
                    <p>
                        If you didn't receive the email, we will gladly&nbsp; 
                        <span className={styles.link} onClick={handleClick}>send you another</span>.
                    </p>
                </div>
                <div style={{ display: isSent ? "block" : "none" }}>
                    <p className={styles.center}>Verification email successfully sent!</p>
                </div>
                <div class={styles.center}><a className={styles.link} href="/">Log Out</a></div>
            </div>
        </div>
    )
}

export default EmailVerificationPage