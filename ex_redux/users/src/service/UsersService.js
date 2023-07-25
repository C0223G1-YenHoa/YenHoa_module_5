

import axios from 'axios';


axios.defaults.baseURL='http://localhost:8080';

export async function getUsers(){
    const res= await axios.get('/users');
    return res.data;
}
export async function deleteId(id){
    const res= await axios.delete('/users/'+id);
    return res.data;
}