import { useEffect, useState } from "react";
import { deleteContract, getContracts } from "../service/contract";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


function Contract() {
    const [contracts, setContracts] = useState([])
    const getContractList = async () => {
        const data = await getContracts();
        setContracts(data)
    }

    useEffect(() => {
        getContractList()
    }, [])

    return (
        <>
            <div className="container-c">
                <ul className="responsive-table">
                    <div>
                        <h2 className="h2-contract" >CONTRACT LIST</h2>
                    </div>
                    <li className="table-header row">
                        <div className="col col-2">Contract</div>
                        <div className="col col-2">Check in</div>
                        <div className="col col-2">Check out</div>
                        <div className="col col-2">Deposit</div>
                        <div className="col col-2">Total</div>
                        <div className="col col-2">
                            <Link to='/contract/create' className="btn btn-secondary"><i class="fa-solid fa-plus"></i></Link>
                        </div>

                    </li>  <div className="row"></div>
                    {
                        contracts.map((contract, index) =>
                            <li key={index} className="table-row">
                                <div className="col col-2" data-label="Job Id">{contract.contract_id}</div>
                                <div className="col col-2" data-label="Customer Name">{contract.check_in} </div>
                                <div className="col col-2" data-label="Amount">{contract.check_out}</div>
                                <div className="col col-2" data-label="Payment Status">{contract.deposit}</div>
                                <div className="col col-2" data-label="Payment Status">{contract.total}</div>
                                <div className="col col-2" data-label="Payment Status">
                                   
                                    <div className="col col-6">
                                    <Link onClick={
                                        () =>{
                                            Swal.fire({
                                                title: 'Are you sure?',
                                                text: 'You will not be able to recover this file!',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonText: 'Yes, delete it!',
                                                cancelButtonText: 'No, cancel!',
                                                reverseButtons: true
                                            }
                                            ).then((res) => {
                                                if (res.isConfirmed) {
                                                    deleteContract(contract.id).then(() => {
                                                        getContractList().then(() => {
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
                                        }
                                    }><i class="fa-solid fa-trash-can"></i></Link>
                                    </div>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </>
    )
}
export default Contract;