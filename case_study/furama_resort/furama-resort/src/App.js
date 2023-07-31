
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Rooms from './component/Room';
import House from './component/House';
import Villa from './component/Villa';
import Contract from './component/Contract';
import Customer from './component/Customer';
import Services from './component/Services';
import ServiceCreation from './component/ServiceCeation';
import ServiceUpdate from './component/ServiceUpdate';
import CustomerCreation from './component/CustomerCreation';
import CustomerUpdate from './component/CustomerUpdate';
import ContractCreation from './component/ContractCreation';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/room' element={<Rooms/>}/>
        <Route path='/house' element={<House/>}/>
        <Route path='/villa' element={<Villa/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/service/create' element={<ServiceCreation/>}/>
        <Route path='/service/update/:id' element={<ServiceUpdate/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/contract' element={<Contract/>}/>
        <Route path='/contract/create' element={<ContractCreation/>}/>
        <Route path='/customer/edit/:id' element={<CustomerUpdate/>}/>
        <Route path='/customer/create' element={<CustomerCreation/>}/>
        <Route path='/customer' element={<Customer/>}/>
       
       
        {/* <Content /> */}
        {/* <Rooms/>
         <House/>
         <Villa/> */}
        {/* <Contract/> */}
        {/* <Customer/> */}
        {/* <Services/>  */}
        {/* <ServiceCreation/>
         <ServiceUpdate/> */}
        {/* <CustomerCreation /> */}
        {/* <CustomerUpdate/> */}
        {/* <ContractCreation/> */}
      </Routes>
    </>
  );
}

export default App;
