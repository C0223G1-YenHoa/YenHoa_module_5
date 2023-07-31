import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'
export async function getCustomers(){
    const  response = await axios.get('customers')
    return response.data
}
export async function getCustomer(id){
    const  response = await axios.get('customers/'+id)
    return response.data
}
export async function deleteCustomer(id){
    const  response = await axios.delete('customers/'+id)
    return response.data
}

export async function createCustomer(customer){
    await axios.post('customers',customer)
}

export async function updateCustomer(customer){
    await axios.put('customers/'+customer.id,customer)
}

