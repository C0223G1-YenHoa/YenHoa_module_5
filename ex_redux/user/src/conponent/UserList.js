import { useDispatch } from "react-redux"
import { deleteUser } from "../store/action/UserAction";


export default function UserList({ user }) {
    const dispatch = useDispatch();
    const deleteUserById= (id) => {
                if (window.confirm("Are you sure delete this user?")) {
                    dispatch(deleteUser(id))
                }
            }

    return (
        <>

            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <button onClick={()=>deleteUserById(user.id)} >Delete User</button>

        </>
    )
}