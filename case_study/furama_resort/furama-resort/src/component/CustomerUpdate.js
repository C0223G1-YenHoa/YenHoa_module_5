import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from "yup";
import { getCustomer, updateCustomer } from '../service/customer';
import { getCustomerType, getCustomerTypes } from '../service/customer_type';
import Swal from 'sweetalert2';



function CustomerUpdate() {
    const nagivate=useNavigate()
    const param = useParams();
    const [customer, setCustomer] = useState({})

    const [types, setTypes] = useState([]);
    const getTypes = async () => {
        const data = await getCustomerTypes();
        setTypes(data)
    }
    useEffect(() => {
        getTypes()
    }, [])

    const getCustomerByID = async (id) => {
        const cus = await getCustomer(id)
        setCustomer(cus);

    }

    useEffect(() => {
        getCustomerByID(param.id)
    }, [param.id])
   
    const updateCus= ( async (update) =>{
        console.log(update);
            const type= await getCustomerType(update.customer_type);
                        await updateCustomer({...update,customer_type:type }).then(()=>
                        {nagivate('/customer')}
                        )
           
    })
    return (

        <>
            {customer.id &&
                <Formik initialValues={{ id: customer.id,
                    name: customer.name, gender: customer.gender, birth: customer.birth, email: customer.email, idCard: customer.idCard, tel: customer.tel, address: customer.address, customer_type: customer.customer_type.id
                }}
                    validationSchema={yup.object({
                        name: yup.string().required("Please enter your name !"),
                        gender: yup.string().required('Please choose your gender!'),
                        birth: yup.string().required('Please enter your date of birth!'),
                        email: yup.string().email('Your email invalidate').required('Please enter your email!'),
                        idCard: yup.string().max(12).min(10).required('Please enter your ID card!'),
                        address: yup.string().required('Please enter your address!'),
                        tel: yup.string().length(10).required('Please enter your phone number!')
                    })}
                    onSubmit={(values) => {
                        updateCus(values).then(
                            () => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Edit success fully!!!!',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                        });
                    }}
                >

                    <div>
                        <div className="eight">
                            <h1>UPDATE CUSTOMER</h1>
                        </div>
                        <div className="container">
                            <Form className='form'>

                                <div className="row w-100 mr-20 ml-20" >

                                    <div className="field col-6 mt-3" tabIndex={2}>
                                        <label className='w in' htmlFor="username">
                                            <i className="fa-solid fa-user" /> Name
                                        </label>
                                        <Field className='w in' id="username" name="name" type="text" placeholder="e.g. john doe" />
                                        <ErrorMessage component='div' className='text-red' name='name' />
                                    </div>
                                    <Field name='id' type='hidden' />
                                    <div className="field col-6 mt-3" tabIndex={2}>
                                        <label className='w in' htmlFor="username">
                                            <i className="fa-solid fa-user" /> Customer Type
                                        </label>
                                        <Field className='w in' id="username" name="customer_type" as="select" placeholder="e.g. john doe" >
                                            {/* <option> {customer.customer_type.type} </option> */}
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
                                        <div htmlFor="dateOfBirth" style={{ paddingLeft: '5px', paddingBottom: '10px' }}>
                                            <i className="fa-solid fa-transgender" /> Gender
                                        </div>
                                        <ErrorMessage component='div' className='text-red' name='gender' />
                                        <span style={{ float: 'left', marginLeft: '20px' }}> <Field className='w in' type="radio" name="gender" value="Female" /> Female</span>
                                        <span style={{ float: 'left', marginLeft: '20px' }}> <Field className='w in' type="radio" name="gender" value="Male" />Male</span>
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
                                        <Field className='w in' id="citizenId" name="idCard" type="text" />
                                        <ErrorMessage component='div' className='text-red' name='idCard' />
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
                                <button className='button' type="submit">UPDATE</button>
                            </Form>
                        </div>
                    </div >
                </Formik >}

        </>
    )
}
export default CustomerUpdate;