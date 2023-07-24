import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup";


function CustomerCreation() {
    return (
        <>

            <Formik initialValues={{
                name: '', gender: '', birth: '', email: '', idCard: '', tel: '', address: ''
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
                    console.log(values);
                    alert('Add new customer successfully.')
                }}
            >

                <div>
                    <div className="eight">
                        <h1>ADD NEW CUSTOMER</h1>
                    </div>
                    <div className="container">
                        <Form className='form'>

                            <div className="row w-100 mr-20 ml-20" >
                            <div className="field" tabIndex={2}>
                                <label className='w in' htmlFor="username">
                                    <i className="fa-solid fa-user" /> Name
                                </label>
                                <Field className='w in' id="username" name="name" type="text" placeholder="e.g. john doe"  />
                                <ErrorMessage component='div' className='text-red' name='name' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field col-6 mt-3">
                                    <div htmlFor="dateOfBirth" style={{ paddingLeft: '5px' }}>
                                        <i className="fa-solid fa-transgender" /> Gender
                                    </div>
                                    <ErrorMessage component='div' className='text-red' name='gender' />
                                    <span style={{ float: 'left', marginLeft: '20px' }}> <Field className='w in' type="radio" name="gender" defaultValue="Female" /> Female</span>
                                    <span style={{ float: 'left', marginLeft: '20px' }}> <Field className='w in' type="radio" name="gender" defaultValue="Male" />Male</span>
                                </div>
                                <div className="field col-6 mt-3">
                                    <label className='w' htmlFor="dateOfBirth">
                                        <i className="fa-solid fa-calendar-days" />Day of Birth
                                    </label>
                                    <Field className='w in' id="dateOfBirth" name="birth" type="date" placeholder="dd/mm/yyyy"  />
                                    <ErrorMessage component='div' className='text-red' name='birth' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field col-6" tabIndex={2}>
                                    <label className='w in' htmlFor="email">
                                        <i className="fa-solid fa-envelope" />Your Email
                                    </label>
                                    <Field className='w in' id="email" name="email" type="text" placeholder="email@domain.com"  />
                                    <ErrorMessage component='div' className='text-red' name='email' />
                                </div>
                                <div className="field col-6 mt-0" tabIndex={2}>
                                    <label className='w in' htmlFor="citizenId">
                                        <i className="fa-solid fa-id-card" />ID Card
                                    </label>
                                    <Field className='w in' id="citizenId" name="idCard" type="text"  />
                                    <ErrorMessage component='div' className='text-red' name='idCard' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="field col-6" tabIndex={2}>
                                    <label className='w in' htmlFor="tel">
                                        <i className="fa-solid fa-phone" />Tel
                                    </label>
                                    <Field className='w in' id="tel" name="tel" type="text" placeholder="(+84) xxxxx xxxx"  />
                                    <ErrorMessage component='div' className='text-red' name='tel' />
                                </div>
                                <div className="field col-6 mt-0" tabIndex={2}>
                                    <label className='w in' htmlFor="address">
                                        <i className="fa-solid fa-location-dot" />Address
                                    </label>
                                    <Field className='w in' id="address" name="address" type="text"  />
                                    <ErrorMessage component='div' className='text-red' name='address' />
                                </div>
                            </div>
                            <button className='button' type="submit">ADD</button>
                        </Form>
                    </div>
                </div>
            </Formik>

        </>
    )
}
export default CustomerCreation;