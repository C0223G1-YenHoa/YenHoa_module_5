import useIncrement from "../App";

function Counter1(){
    const [count, increase] = useIncrement(1);
    return(
    <div style={{ textAlign: 'center' }}>
    <h2>COUNT 1: {count}</h2>
    <button onClick={increase}>Add1</button>
    </div>)
}
export default Counter1;