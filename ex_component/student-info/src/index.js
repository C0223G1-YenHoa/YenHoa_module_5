import React from 'react';
import ReactDOM from 'react-dom';
import StudentInforComponent from './component/StudentInfoComponent';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

const students = [
  {
    id:1,
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    id:2,
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    id:3,
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    id:4,
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    id:5,
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    id:6,
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]



class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <StudentInforComponent studentList={students} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
