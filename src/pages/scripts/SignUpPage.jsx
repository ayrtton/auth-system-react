import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import styles from "../styles/Auth.module.css"

const SignUpPage = () => {
    const { signUp } = useContext(AuthContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        signUp(name, email, password, passwordConfirmation)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title} id="title">Sign Up</div>
                <input className={styles.textInput} type="text" name="name" id="name" placeholder="Name" required 
                    value={name} onChange={(e) => setName(e.target.value)} />
                <input className={styles.textInput} type="email" name="email" id="email" placeholder="Email" required 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={styles.textInput} type="password" name="password" id="password" placeholder="Password" required 
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className={styles.textInput} type="password" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" required 
                    value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <input className={styles.button} type="submit" value="Sign Up" />
                <hr />
                <div id={styles.switch}>Already have an account? <a id={styles.link} href="/login">Login</a></div>
            </form>
        </div>
    )
}

export default SignUpPage