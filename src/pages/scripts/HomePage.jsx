import { useParams } from "react-router-dom"
import styles from "../styles/Auth.module.css"

const HomePage = () => {
    const params = useParams()

    return (
        <div className={styles.container}>
            {Object.keys(params).length > 0 &&
                <div className={styles.form}>
                    {params.message} <br />
                    Click <a className={styles.link} href="/login">here</a> to login...
                </div>
            }
        </div>
    )
}

export default HomePage