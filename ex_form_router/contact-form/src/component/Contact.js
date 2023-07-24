import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";



function Contact(){
    return(
        <>
        <h1>CONTACT FORM</h1>
        <Formik initialValues={{name:'',email:'',phone:'',message:''}} 
        validationSchema={Yup.object({
            name: Yup.string().required('Please enter your name !'),
            email: Yup.string().matches('/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/','Invalid email').required('Required'),
            phone: Yup.string().required('Please enter your phone number !')
        })}
        onSubmit={(values)=>{
            console.log(values);
            alert('Add contact successfully!!!')
        }}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Field id='name' type='text' name='name' />
                    <ErrorMessage name='name' component='div' className="text-red"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Field id='email' type='text' name='email' />
                    <ErrorMessage name='email' component='div' className="text-red"/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <Field id='phone' type='text' name='phone' />
                    <ErrorMessage name='phone' component='div' className="text-red"/>
                </div>
                <div>
                    <label htmlFor="message">Massage:</label>
                    <Field id='message' type='texterea' name='message' />
                    <ErrorMessage name='message' component='div' className="text-red"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
        </>
    )
}
export default Contact;