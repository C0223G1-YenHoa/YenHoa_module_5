import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'
export async function getCustomers(){
    const  response = await axios.get('customers')
    return response.data
}
