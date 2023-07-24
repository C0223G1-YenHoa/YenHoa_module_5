
import { useNavigate } from 'react-router-dom';
import { create } from './LibraryService';

function Create() {
    const navigate = useNavigate();

    const handleSubmit = () => {

        const title = document.getElementById("title").value
        const quantity = document.getElementById("quantity").value
        const book = {
            title: title,
            quantity: quantity
        }
        create(book);
        navigate("/library");

    }
    return (
        <>
            <h1>ADD NEW BOOK</h1>
            <form>
                <input id='title' type="text" />
                <input id='quantity' type="number" />
                <button type='submit' onClick={handleSubmit} >Add</button>
            </form>
        </>
    )
}
export default Create;