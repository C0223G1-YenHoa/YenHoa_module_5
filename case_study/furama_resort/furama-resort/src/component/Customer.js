import { useEffect, useState } from "react";
import { getCustomers } from "../service/customer";

function Customer() {
  const [customers, setCustomers] = useState([])
  const getCustomersList = async () => {
    const data = await getCustomers();
    setCustomers(data)
  }

  useEffect(() => {
    getCustomersList()
  }, [])

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>Customer <b>Management</b></h2>
                </div>
                <div className="col-sm-7">
                  <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Customer</span></a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Gender</th>
                  <th>Citizen ID</th>
                  <th>Tel</th>
                  <th>Email</th>
                  <th>Cus Type</th>
                  <th>Address</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {
                  customers.map((customer, index) => {
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td><a href="#"> {customer.name}</a></td>
                      <td>{customer.date_of_birth}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.id_card}</td>
                      <td>{customer.phone_number}</td>
                      <td>{customer.email}</td>
                      <td>{customer.customer_type}</td>
                      <td>{customer.address}</td>
                      <td>
                        <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
                        <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="#">Previous</a></li>
                <li className="page-item"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5</a></li>
                <li className="page-item"><a href="#" className="page-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Customer;