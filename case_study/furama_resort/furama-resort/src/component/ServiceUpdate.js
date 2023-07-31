import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getServiceType, getServiceTypes } from "../service/service_type";
import * as yup from 'yup'
import { addService, getService, updateService } from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


function ServiceUpdate() {
  const navigate = useNavigate()
  const param = useParams()
  const [service, setService] = useState({})
  const [types, setTypes] = useState([])

  const [type, setType] = useState(0)


  const getTypes = async () => {
    const data = await getServiceTypes()
    setTypes(data)
  }
  useEffect(() => {
    getTypes()
  }, [])

  const getServiceUpdate = async () => {
    const data = await getService(param.id)
    console.log(data);
    setService(data)
    setType(data.service_type.id)
  }

  useEffect(() => {
    getServiceUpdate()
  }, [param.id])

  const editService = async (update) => {
  console.log(type);
  
    const typ = await getServiceType(type)
    console.log(typ);
    await updateService({ ...update, service_type: typ }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Update success fully!!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }).then(()=>{
      navigate('/service')
    }) 
  }
 

  return (
    <>
      {service.id &&
        <Formik
          initialValues={{ id: service.id, service_type: service.service_type.type, service: service.service, usable_area: service.usable_area, costs: service.costs, max_people: service.max_people, type: service.type, standard: service.standard, description: service.description, pool: service.pool, floor: service.floor, free: service.free }}
          validationSchema={yup.object({
            service_type: yup.string().required('Please choose service type'),
            service: yup.string().required('Please enter service name'),
            usable_area: yup.number().min(20).required('Please enter usable area'),
            costs: yup.number().min(40).required('Please enter service cost'),
            max_people: yup.number().min(1).required('Please enter maximum number of people'),
            type: yup.string().required('Please choose retal type'),
            standard: yup.string().required('Please choose standard service'),
            floor: yup.number().required('Please enter number of floors')
          })}
          onSubmit={(value) => {
            editService(value)
            console.log(service.service_type.type);
          }}

        >
          <div>
            <div className="eight">
              <h1>UPDATE SERVICE</h1>
            </div>
            <div className="container1">
              <Form className='form'>

                <div className="row w-100 mr-20 ml-20" >
                  <div className="field col-6 mt-3" tabIndex={2}>
                    <label className='w in' htmlFor="username">
                      Service Type
                    </label>
                    <Field className='w in' id="service_type" name="service_type" as="select" value={type} onChange={(event) => setType(event.target.value)} >
                      <option >--Choose--</option>
                      {
                        types.map((type) =>
                          <option key={type.id} value={type.id} >{type.type}</option>
                        )

                      }
                    </Field>
                    <ErrorMessage component='div' className='text-red' name='service_type' />
                  </div>
                  <div className="field col-6 mt-3" tabIndex={2}>
                    <label className='w in' htmlFor="username">
                      Service Name
                    </label>
                    <Field className='w in' id="username" name="service" type="text" />
                    <ErrorMessage component='div' className='text-red' name='service' />
                  </div>
                </div>
                <div className="row w-100 mr-20 ml-20">
                  <div className="field col-6 mt-3">
                    <div style={{ paddingLeft: '5px', paddingBottom: '10px', fontSize: '20px' }}>
                      Usable Area (m²)
                    </div>
                    <Field className='w in' id="area" name="usable_area" type="number" />
                    <ErrorMessage component='div' className='text-red' name='usable_area' />
                  </div>
                  <div className="field col-6 mt-3">
                    <label className='w' htmlFor="cost">
                      Costs <small>($)</small>
                    </label>
                    <Field className='w in' id="cost" name="costs" type="number" />
                    <ErrorMessage component='div' className='text-red' name='costs' />
                  </div>
                </div>
                <div className="row w-100 mr-20 ml-20">
                  <div className="field col-6" tabIndex={2}>
                    <label className='w in' htmlFor="email">
                      Max people
                    </label>
                    <Field className='w in' id="email" name="max_people" type="number" />
                    <ErrorMessage component='div' className='text-red' name='max_people' />
                  </div>
                  <div className="field col-6 mt-0" tabIndex={2}>
                    <label className='w in' htmlFor="citizenId">
                      Type
                    </label>
                    <Field className='w in' id="citizenId" name="type" as='select' >
                      <option>--Choose--</option>
                      <option value={'Year'}>Year</option>
                      <option value={'Month'}>Month</option>
                      <option value={'Day'}>Day</option>
                    </Field>
                    <ErrorMessage component='div' className='text-red' name='type' />
                  </div>
                </div>
                {
                  service.service_type == 2 | service.service_type.id == 3 | type == 2 | type == 3 &&
                  <div className="row w-100 mr-20 ml-20">
                    <div className="field col-6" tabIndex={2}>
                      <label className='w in' htmlFor="tel">
                        Standard
                      </label>
                      <Field className='w in' id="citizenId" name="standard" as='select' >
                        <option>--Choose--</option>
                        <option value={'Standard'}>Standard</option>
                        <option value={'Luxury'}>Luxury</option>
                        <option value={'Deluxe'}>Deluxe</option>
                      </Field>
                      <ErrorMessage component='div' className='text-red' name='standard' />
                    </div>
                    <div className="field col-6 mt-0" tabIndex={2}>
                      <label className='w in' htmlFor="description">
                        Description
                      </label>
                      <Field className='w in' id="description" name="description" type="text" />
                      <ErrorMessage component='div' className='text-red' name='description' />
                    </div>
                    <Field className='w in' id="free" name="free" type="hidden" value={'No'} />
                  </div>
                }
                {type == 3 | service.service_type.id == 3 &&
                  <div className="row w-100 mr-20 ml-20">
                    <div className="field col-6 mt-0" tabIndex={2}>
                      <label className='w in' htmlFor="pool">
                        Pool (m²)
                      </label>
                      <Field className='w in' id="pool" name="pool" type="number" />
                      <ErrorMessage component='div' className='text-red' name='pool' />
                    </div>
                    <div className="field col-6 mt-0" tabIndex={2}>
                      <label className='w in' htmlFor="floor">
                        Floor
                      </label>
                      <Field className='w in' id="floor" name="floor" type="number" />
                      <ErrorMessage component='div' className='text-red' name='floor' />
                    </div>
                  </div>}
                {
                  type == 2 | service.service_type.id == 2 &&
                  <div className="row w-100 mr-20 ml-20">
                    <div className="field col-12 mt-0" tabIndex={2}>
                      <label className='w in' htmlFor="floor">
                        Floor
                      </label>
                      <Field className='w in' id="floor" name="floor" type="number" />
                      <ErrorMessage component='div' className='text-red' name='floor' />
                    </div>
                    <Field className='w in' id="pool" name="pool" type="hidden" value={'No'} />
                  </div>

                }
                {
                  type == 1 | service.service_type.id == 1 &&
                  <div className="row w-100 mr-20 ml-20">
                    <div className="field col-12 mt-0" tabIndex={2}>
                      <label className='w in' htmlFor="free">
                        Free
                      </label>
                      <Field className='w in' id="free" name="free" type="text" />
                      <ErrorMessage component='div' className='text-red' name='free' />
                      <Field className='w in' id="pool" name="pool" type="hidden" value={'No'} />
                      <Field className='w in' id="citizenId" name="standard" type='hidden' value={'No'} />
                      <Field className='w in' id="description" name="description" type="hidden" value={''} />
                      <Field className='w in' id="floor" name="floor" type="hidden" value={'No'} />
                    </div>
                  </div>
                }
                <button className='button' type="submit">UPDATE SERVICE</button>
              </Form>
            </div>
          </div >
        </Formik >}
    </>
  )
}
export default ServiceUpdate;