import axios from 'axios';

export async function getList(){
    const res=await axios.get('http://localhost:8080/list');
    return res.data;
}
export async function createItem(item){
   await axios.post('http://localhost:8080/list',item);
}