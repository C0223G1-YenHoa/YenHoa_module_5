import { useEffect, useState } from "react";
import { deleteService, getServices } from "../service/service";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


function Services() {
  const [services, setServices] = useState([]);
  const getServicesList = async () => {
    const data = await getServices();
    setServices(data)
  }
  console.log(services);

  useEffect(() => {
    getServicesList()
  }, [])


  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>Service <b>Management</b></h2>
                </div>
                <div className="col-sm-7">
                  <Link to='/service/create' className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Service</span></Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Service</th>
                  <th>Usable area</th>
                  <th>Costs</th>
                  <th>Max people</th>
                  <th>Type</th>
                  <th>Standard</th>
                  <th>Description</th>
                  <th>Pool</th>
                  <th>Floor</th>
                  <th>Free </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {
                  services.map((service, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><a href="#"> {service.service}</a></td>
                      <td>{service.usable_area}</td>
                      <td>{service.costs}</td>
                      <td>{service.max_people}</td>
                      <td>{service.type}</td>
                      <td>{service.standard}</td>
                      <td>{service.description}</td>
                      <td>{service.pool}</td>
                      <td>{service.floor}</td>
                      <td>{service.free}</td>
                      <td>
                        <Link to={`/service/update/${service.id}`}><a  className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a></Link>
                        <Link onClick={() => {
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
                                await deleteService(service.id).then(() => {
                                  getServices().then((data) => {
                                    setServices(data);
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
                            })}}><a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a></Link>
                      </td>
                    </tr>

                  )
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
export default Services;