import axios from 'axios';


export async function getBooks() {
     const res = await axios.get('http://localhost:8080/libraries')
     return res.data;
}
export async function getBook(id) {
     const res = await axios.get('http://localhost:8080/libraries/' + id)
     return res.data;
}

export async function create(newBook) {
     return await axios.post('http://localhost:8080/libraries', newBook)
}
export async function update(id, updateBook) {
     return await axios.put('http://localhost:8080/libraries/' + id, updateBook)
}

export async function deleteId(id) {
     return await axios.delete('http://localhost:8080/libraries/' + id).then(() => {
          alert("xoa thanh cong")
     })
}
