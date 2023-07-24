import React, { useState } from 'react'
import '../Component/Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

const [userdata , setUserdata] = useState({name:"",email:"",password :""});

const router = useNavigate()

const handlechange = (event) => {
    setUserdata({...userdata ,[event.target.name]:event.target.value})
}
console.log(userdata);

const handleSubmit = (event) => {
    event.preventDefault();
    if(userdata.name && userdata.email && userdata.password){
        const array = JSON.parse(localStorage.getItem("Users")) || [];
        const userobject ={
            name : userdata.name,
            email :userdata.email,
            password: userdata.password,
        }
        array.push(userobject);
        localStorage.setItem("Users",JSON.stringify(array));
        setUserdata({})
        alert("Registerd succesfully")
        router('/Login')
    }else{
        alert("please submit the require details")
    }
}

  return (

    <div id='reg-body'> 

        <div id='reg-form'>

            <div id='com-img'>
                <h2>Welecome to Shoppers <br /> Stop</h2>
                <p>Let's get you registered!</p>

            </div>


        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="">Name</label> */}
            <input type="text" onChange={handlechange} name='name' placeholder='Name*' /> <br />

            {/* <label htmlFor="">Email</label> */}
           <input type="email" onChange={handlechange} name='email' placeholder='Email*'  />  <br />

           {/* <label htmlFor="">Password</label> */}
           <input type='password' onChange={handlechange } name='password' placeholder='Password *'/>  <br />

           <input type="submit" />

           <p className='reg-email'>Login using <u>Email</u></p>

           {/* <button>abc</button> */}


        </form>
        </div>


       



    </div>
  )


}

export default Register