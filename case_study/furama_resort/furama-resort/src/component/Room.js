import { useEffect, useState } from "react"
import { deleteService, getServices } from "../service/service";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Rooms() {
  const [services, setServices] = useState([]);
  const getServiceList = async () => {
    const data = await getServices()
    setServices(data)
  }

  useEffect(() => {
    getServiceList()
  }, [])
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {
              services.map((service) =>
                <div className="col-md-6 col-lg-4 wow fadeInUp col-6" data-wow-delay="0.1s">
                  <div className="service-item">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={service.img} style={{ width: 350, height: 250 }} alt="" />
                    </div>
                    <div className="p-4 text-center border border-5 border-light border-top-0">

                      <h4 className="mb-3">{service.service}</h4>
                      <div className="row">
                        <p className="col-6">Room size: {service.usable_area} m²</p>
                        <p className="col-6">Cost: {service.costs} $</p>
                      </div>
                      <Link to={`/service/update/${service.id}`}><a className="fw-medium" >Update<i className="fa fa-arrow-right ms-2" /></a></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
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
                            })}}> <a className="fw-medium" >Delete<i className="fa fa-arrow-right ms-2" /></a></Link>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}
export default Rooms