import useIncrement from "../App";

function Counter2(){
    const [count, increase] = useIncrement(2);
    return(
    <div style={{ textAlign: 'center' }}>
    <h2>COUNT 2: {count}</h2>
    <button  onClick={increase}>Add2</button>
    </div>)
}
export default Counter2;
