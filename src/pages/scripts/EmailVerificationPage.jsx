import styles from "../styles/Auth.module.css"

const EmailVerificationPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                Thanks for signing up!
                <p>
                    Before getting started, could you verify your email 
                    address by clicking on the link we just emailed to you?
                </p>
                <p>
                    If you didn't receive the email, we will gladly&nbsp; 
                    <a className={styles.link} href="/">send you another</a>.
                </p>
                <div class={styles.center}><a className={styles.link} href="/">Log Out</a></div>
            </div>
        </div>
    )
}

export default EmailVerificationPage