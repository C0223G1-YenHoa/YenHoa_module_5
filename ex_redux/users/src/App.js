import {Link} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
     <button><Link to='/users'>Get Users</Link></button>
    </div>
  );
}

export default App;
