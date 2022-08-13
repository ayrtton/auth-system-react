import styles from "../styles/Auth.module.css"

const PasswordResetPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Password Reset</div>
                <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required />
                <input className={styles.button} type="submit" value="Send" />
            </form>
        </div>
    )
}

export default PasswordResetPage