import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'

export async function getServiceTypes(){
    const res= await axios.get('service_type')
    return res.data
}
export async function getServiceType(id){
    const res= await axios.get('service_type/'+id)
    return res.data
}