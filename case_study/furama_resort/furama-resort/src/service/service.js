import axios from 'axios'

axios.defaults.baseURL='http://localhost:8080/'
export async function getServices(){
    const res = await axios.get('services')
    return res.data
}
export async function getService(id){
    const res = await axios.get('services/'+id)
    return res.data
}
export async function deleteService(id){
    await axios.delete('services/'+id)
}
export async function addService(service){
    await axios.post('services',service)
}
export async function updateService(service){
    await axios.put('services/'+service.id,service)
}

