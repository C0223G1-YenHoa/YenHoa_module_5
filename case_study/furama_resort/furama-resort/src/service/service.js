import axios from 'axios'

axios.defaults.baseURL='http://localhost:8080/'
export async function getServices(){
    const res = await axios.get('services')
    return res.data
}