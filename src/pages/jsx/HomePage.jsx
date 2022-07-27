import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { getUsers } from "../../services/api"

const HomePage = () => {
    const { logout } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await getUsers()
            setUsers(response.data)
            setLoading(false)
        })()
    }, [])

    const handleLogout = () => {
        logout()
    }

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    return (
        <>
            <h1>HomePage</h1>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage