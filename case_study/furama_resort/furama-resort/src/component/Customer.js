import { useEffect, useState } from "react";
import { deleteCustomer, getCustomers } from "../service/customer";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


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
                  <Link to='/customer/create' className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Customer</span></Link>
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
                  customers.map((customer, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><a href="#"> {customer.name}</a></td>
                      <td>{customer.birth}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.idCard}</td>
                      <td>{customer.tel}</td>
                      <td>{customer.email}</td>
                      <td>{customer.customer_type.type}</td>
                      <td>{customer.address}</td>
                      <td>
                        <Link to={`/customer/edit/${customer.id}`} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></Link>
                        <Link onClick={
                          () => {
                            Swal.fire({
                              title: 'Are you sure?',
                              text: 'You will not be able to recover this file!',
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonText: 'Yes, delete it!',
                              cancelButtonText: 'No, cancel!',
                              reverseButtons: true
                            }
                            ).then(async (res) => {
                              if (res.isConfirmed) {
                                await deleteCustomer(customer.id).then(() => {
                                  getCustomers().then((data) => {
                                    setCustomers(data);
                                  }).then(() => {
                                    Swal.fire({
                                      icon: 'success',
                                      title: 'Delete success fully!!!!',
                                      showConfirmButton: false,
                                      timer: 1500
                                    })
                                  })
                                });
                              } else if (res.dismiss === Swal.DismissReason.cancel) {
                              }
                            })
                          }} className="delete" title="Delete" data-toggle="tooltip" ><i className="material-icons"></i></Link>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            {/* <div className="clearfix">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Customer;