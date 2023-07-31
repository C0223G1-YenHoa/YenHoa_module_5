import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from "yup";
import { getCustomerType, getCustomerTypes } from '../service/customer_type';
import { createCustomer } from '../service/customer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function CustomerCreation() {
    // const [type,setType]=useState({})
    // const getType = async (id) => {
    //     const data =await getCustomerType(id)
    //     setType(data)
    // }
    const navigate=useNavigate();
    const [types, setTypes] = useState([]);
    const getTypes = async () => {
        const data = await getCustomerTypes();
        setTypes(data)
    }

    const create = async (customer) => {
        const type = await getCustomerType(customer.customer_type)
        await createCustomer({
            ...customer,
            customer_type: type,
        }).then(()=>{
            Swal.fire({
                icon:'success',
                title:'Add new customer successfully',
                showConfirmButton:false,timer:1500
            })
        }).then(()=>{
            navigate('/customer')
        })
    }

    useEffect(() => {
        getTypes()
    }, [])

    return (
        <>

            <Formik initialValues={{
                name: '', gender: '', birth: '', email: '', idCard: '', tel: '', address: '', customer_type: ''
            }}
                validationSchema={yup.object({
                    name: yup.string().max(50,'Name cannot be longer than 50 characters').min(3,'Name must be at least 3 characters').required("Please enter your name !"),
                    gender: yup.string().required('Please choose your gender!'),
                    birth: yup.string().required('Please enter your date of birth!'),
                    email: yup.string().email('Your email invalidate').required('Please enter your email!'),
                    idCard: yup.string().max(12).min(10).required('Please enter your ID card!'),
                    address: yup.string().required('Please enter your address!'),
                    tel: yup.string().length(10).required('Please enter your phone number!'),
                    customer_type: yup.string().required('Please choose customer type!')
                })}
                onSubmit={(value) => {
                    console.log(value);
                    create(value)
                  
                }}
            >

                <div>
                    <div className="eight">
                        <h1>ADD NEW CUSTOMER</h1>
                    </div>
                    <div className="container1">
                        <Form className='form'>

                            <div className="row w-100 mr-20 ml-20" >

                                <div className="field col-6 mt-3" tabIndex={2}>
                                    <label className='w in' htmlFor="username">
                                        <i className="fa-solid fa-user" /> Name
                                    </label>
                                    <Field className='w in' id="username" name="name" type="text" placeholder="e.g. john doe" />
                                    <ErrorMessage component='div' className='text-red' name='name' />
                                </div>
                                <div className="field col-6 mt-3" tabIndex={2}>
                                    <label className='w in' htmlFor="username">
                                        <i className="fa-solid fa-user" /> Customer Type
                                    </label>
                                    <Field className='w in' id="username" name="customer_type" as="select"  >
                                        <option> </option>
                                        {
                                            types.map((type) =>
                                                <option key={type.id} value={type.id}>{type.type}</option>
                                            )
                                        }
                                    </Field>
                                    <ErrorMessage component='div' className='text-red' name='customer_type' />
                                </div>
                            </div>
                            <div className="row w-100 mr-20 ml-20">
                                <div className="field col-6 mt-3">
                                    <div style={{ paddingLeft: '5px', paddingBottom: '10px', fontSize: '20px' }}>
                                        <i className="fa-solid fa-transgender" /> Gender
                                    </div>
                                    <ErrorMessage component='div' className='text-red' name='gender' />
                                    <span style={{ float: 'left', marginLeft: '80px', fontSize: '15px' }}> <Field className='w in' type="radio" name="gender" value="Female" /> Female</span>
                                    <span style={{ float: 'left', marginLeft: '50px', fontSize: '15px' }}> <Field className='w in' type="radio" name="gender" value="Male" />Male</span>
                                </div>
                                <div className="field col-6 mt-3">
                                    <label className='w' htmlFor="dateOfBirth">
                                        <i className="fa-solid fa-calendar-days" />Day of Birth
                                    </label>
                                    <Field className='w in' id="dateOfBirth" name="birth" type="date" placeholder="dd/mm/yyyy" />
                                    <ErrorMessage component='div' className='text-red' name='birth' />
                                </div>
                            </div>
                            <div className="row w-100 mr-20 ml-20">
                                <div className="field col-6" tabIndex={2}>
                                    <label className='w in' htmlFor="email">
                                        <i className="fa-solid fa-envelope" />Your Email
                                    </label>
                                    <Field className='w in' id="email" name="email" type="text" placeholder="email@domain.com" />
                                    <ErrorMessage component='div' className='text-red' name='email' />
                                </div>
                                <div className="field col-6 mt-0" tabIndex={2}>
                                    <label className='w in' htmlFor="citizenId">
                                        <i className="fa-solid fa-id-card" />ID Card
                                    </label>
                                    <Field className='w in' id="citizenId" name="idCart" type="text" />
                                    <ErrorMessage component='div' className='text-red' name='idCart' />
                                </div>
                            </div>
                            <div className="row w-100 mr-20 ml-20">
                                <div className="field col-6" tabIndex={2}>
                                    <label className='w in' htmlFor="tel">
                                        <i className="fa-solid fa-phone" />Tel
                                    </label>
                                    <Field className='w in' id="tel" name="tel" type="text" placeholder="(+84) xxxxx xxxx" />
                                    <ErrorMessage component='div' className='text-red' name='tel' />
                                </div>
                                <div className="field col-6 mt-0" tabIndex={2}>
                                    <label className='w in' htmlFor="address">
                                        <i className="fa-solid fa-location-dot" />Address
                                    </label>
                                    <Field className='w in' id="address" name="address" type="text" />
                                    <ErrorMessage component='div' className='text-red' name='address' />
                                </div>
                            </div>
                            <button className='button' type="submit">ADD NEW CUSTOMER</button>
                        </Form>
                    </div>
                </div>
            </Formik>

        </>
    )
}
export default CustomerCreation;