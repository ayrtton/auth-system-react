import styles from "../styles/Auth.module.css"

const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.title} id="title">Sign Up</div>
                <input className={styles.textInput} type="text" name="name" id="name" placeholder="Name" required />
                <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required />
                <input className={styles.textInput} type="password" name="password" id="password" placeholder="Password" required />
                <input className={styles.textInput} type="password" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" required />
                <input className={styles.button} type="submit" value="Sign Up" />
                <hr />
                <div id={styles.switch}>Already have an account? <a id={styles.link} href="/login">Login</a></div>
            </form>
        </div>
    )
}

export default SignUpPage