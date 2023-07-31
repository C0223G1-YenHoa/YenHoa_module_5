import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8080/'
export async function getContracts(){
    const reponse = await axios.get('contracts')
    return reponse.data
}
export async function getContract(id){
    const reponse = await axios.get('contracts/'+id)
    return reponse.data
}
export async function deleteContract(id){
    const reponse = await axios.delete('contracts/'+id)
}
export async function createContract(contract){
   await axios.post('contracts',contract)
}
