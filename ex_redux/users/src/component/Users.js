

import { useEffect, useState } from "react"
import { deleteId, getUsers } from "../service/UsersService"
import { useNavigate } from "react-router"

export default function Users() {

    const [users, setUsers] = useState([])
    const navigate=useNavigate();
    const getUserList = async () => {
            const data = await getUsers()
            setUsers(data)
        }
    useEffect(() => {
        getUserList()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </thead>
                <tbody>
                    {
                        users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <button onClick={ ()=>{
                                    if(window.confirm('Are you sure delete this user?')){
                                        deleteId(user.id)
                                         getUserList()
                                         navigate('/users')
                                    }
                                   
                                }} >Delete User</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )

}