import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { createContract, getContract, getContracts } from '../service/contract';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function ContractCreation() {
        const navigate=useNavigate()
        let contr;
        const [contracts,setContracts]=useState([])
        const getContractList = async () => {
            const data = await getContracts();
            setContracts(data)
        }
    
        useEffect(() => {
            getContractList()
        }, [])

    const create = async (contract) =>{
         await createContract(contract)
        navigate('/contract')
    }

    return (
        <>
            <Formik
            initialValues={{contract_id :'',check_in:'',check_out:'',deposit:'',total:''}}

            validationSchema={yup.object({
                contract_id:yup.string().required("Please enter contract ID !"),
                check_in : yup.string().required("Please choose check_in date !"),
                check_out : yup.string().required("Please choose check_out date !"),
                deposit : yup.number().min('20','Deposit must be at least 200$').required("Please enter this contract's deposit"),
                total : yup.number().required("Please enter this contract's deposit")
            })}

            onSubmit={(value) => {
              contr =contracts.filter((item) => {
                     return item.contract_id===value.contract_id
                })
                console.log(contr);
                {
                    if(contr.length==0){
                          create(value).then(() => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Add success fully!!!!',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        })
                    } else{
                         {
                            Swal.fire({
                                icon: 'error',
                                title: 'This ID already exists !',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    }
                }
   
            }}
            >
                <div id="container" >
                    <h1>• Contract •</h1>
                    <div className="underline">
                    </div>
                    <div className="icon_wrapper">
                        <div className="icon">
                            <span style={{ fontSize: '60px' }}><i className="fa-solid fa-file-signature" /></span>
                        </div>
                    </div>
                    <Form action="#" method="post" id="contact_form">
                        <div className="telephone">
                            <label htmlFor="message_input" />
                            <Field type="text" name="contract_id" placeholder="Contract" id="message_input"   />
                            <ErrorMessage component='span' className='text-red' name='contract_id'  />

                        </div>
                        <div className="name">
                            <label htmlFor="name_input">CHECK IN</label>
                            <br />
                            <br />
                            <Field type="date" placeholder="Check in" name="check_in" id="name_input"  />
                            <ErrorMessage component='div' className='text-red' name='check_in' />
                        </div>
                        <div className="email">
                            <label htmlFor="email_input">CHECK OUT</label>
                            <br />
                            <br />
                            <Field type="date" placeholder="check out" name="check_out" id="email_input"  />
                            <ErrorMessage component='div' className='text-red' name='check_out' />
                        </div>
                        <div className="telephone">
                            <label htmlFor="deposit" />
                            <Field type="text" placeholder="Deposit" name="deposit" id="deposit"  />
                            <ErrorMessage component='div' className='text-red' name='deposit' />
                        </div>
                        <div className="telephone">
                            <label htmlFor="telephone_input" />
                            <Field type="text" placeholder="total" name="total" id="telephone_input"  />
                            <ErrorMessage component='div' className='text-red' name='total' />
                        </div>
                        <div className="submit">
                            <input type="submit" defaultValue="Send" id="form_button" />
                        </div>
                    </Form>{/* // End form */}
                </div>{/* // End #container */}
            </Formik>
        </>
    )
}
export default ContractCreation;