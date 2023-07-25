import { useState, useEffect } from 'react';
import { deleteId, getBooks } from '../service/LibraryService';
import { Link, useNavigate } from "react-router-dom";

export function Library() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
     const libraries = async () => {
            const data = await getBooks();
            setBooks(data);
        }
    useEffect(() => {
        libraries();
    }, [])

    return (
        <>
            <h1>LIBRARY</h1>
            <Link to={`/library/create`}>Add a new Book</Link>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {books.map((book, index) =>
                    (<tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <td><button> <Link to={`/library/update/${book.id}`}>Edit</Link></button></td>
                            <td><button onClick={async () => {
                                deleteId(book.id)
                                libraries()
                                navigate("/library")
                            }} >Delete</button></td>
                        </td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    )
}