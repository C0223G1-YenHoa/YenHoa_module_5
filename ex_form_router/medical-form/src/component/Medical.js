import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

function Medical() {
    return (
        <>
            <h1>TỜ KHAI BÁO Y TẾ</h1>
            <Formik initialValues={{
                name: '', citizenId: '', birth: '', gender: '', nationality: '', company: '', workingPart: '', insurance: '',
                city: '', district: '', commune: '', address: '', phone: '', email: '',message:'',sign:'',contact:''
            }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Vui lòng nhập tên của bạn.'),
                    citizenId: Yup.string().required('Vui lòng nhập CCCD hoặc Hộ chiếu'),
                    birth: Yup.number().min('1900').required('Vui lòng nhập năm sinh'),
                    nationality: Yup.string().required('Vui lòng nhập quốc tịch.'),
                    city: Yup.string().required('Vui lòng nhập tỉnh/thành phố.'),
                    district: Yup.string().required('Vui lòng nhập huyện/quận.'),
                    commune: Yup.string().required('Vui lòng nhập phường/xã.'),
                    address: Yup.string().required('Vui lòng nhập số nhà,phố,tổ dân phố/thôn/đội.'),
                    phone: Yup.string().required('Vui lòng nhập số điện thoại'),
                    email: Yup.string().matches('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$', 'Email không đúng định dạng').required('Vui lòng nhập email')
                })}
                onSubmit={(values) => {
                    console.log(values);
                    alert('Khai báo thành công.')
                }}
            >
                <Form>
                    <div className='container'>
                        <div>
                            <label htmlFor='name'>Họ tên: </label>
                            <Field id='name' type='text' name='name' />
                            <ErrorMessage component='div' className='text-red' name='name' />
                        </div>
                        <div>
                            <label htmlFor='citizenId'>CCCD/Hộ chiếu: </label>
                            <Field id='citizenId' type='text' name='citizenId' />
                            <ErrorMessage component='div' className='text-red' name='citizenId' />
                        </div>
                        <div>
                            <label htmlFor='birth'>Năm sinh: </label>
                            <Field id='birth' type='number' name='birth' />
                            <ErrorMessage component='div' className='text-red' name='birth' />
                        </div>
                        <div>
                            <label htmlFor='gender'>Giới tính: </label>
                            <label className='gender'>Nam
                                <Field type='radio' name='gender' value='Nam' />
                            </label>
                            <br/>
                    
                            <label className='gender'>Nữ   
                                <Field type='radio' name='gender' value='Nữ' />
                            </label>

                        </div>
                        <div>
                            <label htmlFor='nationality'>Quốc tịch: </label>
                            <Field id='nationality' type='text' name='nationality' />
                            <ErrorMessage component='div' className='text-red' name='nationality' />
                        </div>
                        <div>
                            <label htmlFor='company'>Công ty làm việc: </label>
                            <Field id='company' type='text' name='company' />
                            <ErrorMessage component='div' className='text-red' name='company' />
                        </div>
                        <div>
                            <label htmlFor='workingPart'>Bộ phận làm việc: </label>
                            <Field id='workingPart' type='text' name='workingPart' />
                            <ErrorMessage component='div' className='text-red' name='workingPart' />
                        </div>
                        <div>
                            <label className='gender' htmlFor='insurance'>Có bảo hiểm y tế: </label>
                            <Field  type='checkbox' name='insurance' value='Có' />
                            <ErrorMessage className='text-red' name='insurance' />
                        </div>
                    </div>
                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                    <div className='container'>
                        <div>
                            <label htmlFor='city'>Tỉnh thành: </label>
                            <Field id='city' type='text' name='city' />
                            <ErrorMessage component='div' className='text-red' name='city' />
                        </div>
                        <div>
                            <label htmlFor='district'>Quận/huyện: </label>
                            <Field id='district' type='text' name='district' />
                            <ErrorMessage component='div' className='text-red' name='district' />
                        </div>
                        <div>
                            <label htmlFor='commune'>Phường/xã: </label>
                            <Field id='commune' type='text' name='commune' />
                            <ErrorMessage component='div' className='text-red' name='commune' />
                        </div>
                        <div>
                            <label htmlFor='address'>Số nhà,phố,tổ dân phố/thôn/đội: </label>
                            <Field id='address' type='text' name='address' />
                            <ErrorMessage component='div' className='text-red' name='address' />
                        </div>
                        <div>
                            <label htmlFor='phone'>Số điện thoại: </label>
                            <Field id='phone' type='text' name='phone' />
                            <ErrorMessage component='div' className='text-red' name='phone' />
                        </div>
                        <div>
                            <label htmlFor='email'>Email: </label>
                            <Field id='email' type='text' name='email' />
                            <ErrorMessage component='div' className='text-red' name='email' />
                        </div>
                    </div>
                    <h2>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia):</h2>
                    <div className='container1'>
                    <textarea type='text' name='message'/>
                    </div>
                    <h2>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h2>
                    <Field  type='checkbox' name='sign' value='Sốt' />Sốt
                    <Field  type='checkbox' name='sign' value='Ho' />Ho
                    <Field  type='checkbox' name='sign' value='Khó thở' />Khó thở
                    <Field  type='checkbox' name='sign' value='Viêm phổi' />Viêm phổi
                    <Field  type='checkbox' name='sign' value='Đau họng' />Đau họng
                    <Field  type='checkbox' name='sign' value='Mệt mỏi' />Mệt mỏi
                    <div >
                        <button type='submit'>submit</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}
export default Medical;