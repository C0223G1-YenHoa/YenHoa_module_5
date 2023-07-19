import React from 'react';



class StudentInforComponent extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <>
        <h1>STUDENTS</h1>
        <table id='customers'>
          <thead>
          <tr>
            <th>COMPANY</th>
            <th>CONTACT</th>
            <th>COUNTRY</th>
          </tr>
          </thead>
          <tbody>
          {this.props.studentList.map((student) => 
            <tr key={student.id}>
              <td  >{student.company}</td>
              <td >{student.contact}</td>
              <td >{student.country}</td>
            </tr>
          )}
          </tbody>
        </table>
      </>
    )
  }
}
export default StudentInforComponent;