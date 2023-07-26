
import { useEffect } from "react";
import { getUserList } from "../store/action/UserAction";
import { userReducer } from "../store/reducer/UserReducer";
import UserList from "./UserList";

import { useDispatch, useSelector } from "react-redux"

export default function User() {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.userReducer.users)
    console.log(users);

    const getList = () => {
        dispatch(getUserList())
    };


    // useEffect(()=>{
    //     dispatch(getUserList())
    // },[dispatch])

    return (
        <>
            <div >
                <button onClick={getList}>Get Users</button>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <UserList user={user} />
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </>
    )

}