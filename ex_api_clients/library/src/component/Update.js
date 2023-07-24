
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, update } from './LibraryService';
import { useEffect, useState } from 'react';

function Update() {
    const navigate = useNavigate();
    const param = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const findBook = async () => {
            const data = await getBook(param.id);
            setBook(data);
        }
        findBook();
    }, [])

    console.log(book);
    const handleSubmit = () => {
        const title = document.getElementById("title").value
        const quantity = document.getElementById("quantity").value
        const updateBook = {
            title: title,
            quantity: quantity
        }
        update(book.id, updateBook);
        navigate("/library");

    }
    return (
        <>
            <h1>UPDATE BOOK</h1>
            <form>
                <input id='title' type="text" placeholder={book.title} />
                <input id='quantity' type="number" placeholder={book.quantity} />
                <button type='submit' onClick={handleSubmit} >Update</button>
            </form>
        </>
    )
}
export default Update;