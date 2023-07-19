import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:[],
      item:''
    }
  }

  handleChange =(event) =>{
    const newItem = event.target.value;
    this.setState(()=>({
      item: newItem
    }))
  }

  handAddItem=()=>{
    const {list,item}=this.state;
    if(item!==''){
      const updateList=list.concat(item); 
      this.setState({list:updateList,item:''})
    }
  }

  render(){
    const {list,item}=this.state;
    return(
    <>
     <h1>TODO APP</h1>
    <input type='text' value={item} onChange={this.handleChange} />
    <button onClick={this.handAddItem}>Add</button>
    <ul>
      {list.map((work,index)=>(
         <li key={index}>{work}</li>
      ))
      }
    
    </ul>
    </>
    )

  }

}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
