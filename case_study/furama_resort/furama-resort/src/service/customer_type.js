import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'
export async function getCustomerTypes(){
    const response= await axios.get('customer_type')
    return response.data;
}
export async function getCustomerType(id){
    const response= await axios.get('customer_type/'+id)
    return response.data;
}
