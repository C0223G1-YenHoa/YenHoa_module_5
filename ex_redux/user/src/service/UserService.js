import axios from 'axios';


axios.defaults.baseURL='http://localhost:8080';

export async function getUsers(){
    const res= await axios.get('/user');
    return res.data;
}
export async function deleteUserById(id){
    const res= await axios.delete('/user/'+id);
    return res.data;
}