import { useEffect, useState } from 'react'
import { createItem, getList } from './ListService';

export default function TodoApp() {
    const [item, setItem] = useState({});
    const [list, setList] = useState([]);
    const[length,setLength]=useState(0);
    const listToDo = async () => {
            const data = await getList();
            setList(data);
        }
    useEffect(() => {
        listToDo()
    }, [length]);


    const handleChange = (event) => {
        const newItem = event.target.value;
        if (newItem !== "") {
            console.log(newItem);
            setItem( newItem )
        }
    }

    const handleAddItem = async () => {
        const i={item: item}
        await createItem(i)
        setLength(length+1);
    }
    console.log(list);
    return (
        <>
            <h1>
                TODO LIST
            </h1>
            <input type='text' onChange={handleChange} />
            <button onClick={handleAddItem} >Submit</button>
            <ul >
                {list.map((todo, index) =>
                
                    <li key={index}>{todo.item}</li>
                
               )}
            </ul>
        </>
    )

}