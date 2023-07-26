import { useDispatch } from "react-redux"
import { deleteUser } from "../store/action/UserAction";


export default function UserList({ user }) {
    const dispatch = useDispatch();
    return (
        <>

            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <button onClick={() => {
                if (window.confirm("Are you sure delete this user?")) {
                    dispatch(deleteUser(user.id))
                }
            }} >Delete User</button>

        </>
    )
}