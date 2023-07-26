import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Multipleproduct from './Component/Multipleproduct';
import Singleproduct from './Component/Singleproduct';

function App() {
  return (
    <div>
      <Navbar/>
         
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Multipleproduct' element={<Multipleproduct/>}/>
        <Route exact path='/Singleproduct/:id' element={<Singleproduct/>}/>




      </Routes>



      
    </div>
  );
}

export default App;
