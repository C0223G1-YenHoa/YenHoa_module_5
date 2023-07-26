import { useEffect, useState } from "react";
import { getServices } from "../service/service";

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
                  <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Service</span></a>
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
                      <td>{index+1}</td>
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
                        <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></a>
                        <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
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