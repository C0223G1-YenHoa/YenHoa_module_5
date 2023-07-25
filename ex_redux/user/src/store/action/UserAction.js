import { deleteUserById, getUsers } from "../../service/UserService";

export const getUserList = () => {
    return async (dispatch) => {
        const response = await getUsers();
        dispatch({ type: 'GET_USERS_SUCCESS',payload: response });
        console.log(response);
    }
}

export const deleteUser = (id) => {
    return async (dispatch)=>{
     await deleteUserById(id).then(
       dispatch({type: 'DELETE_USER'},id))
    } 
}