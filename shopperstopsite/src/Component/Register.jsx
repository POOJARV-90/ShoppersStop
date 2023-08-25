import React, { useState } from 'react'
import '../Component/Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Register = () => {

const [userdata , setUserdata] = useState({name:"",email:"",password :"" , confirmpassword:"" , role:"Buyer"});

const handleRole = (event) =>{
    setUserdata({...userdata,"role":event.target.value})
  }

const router = useNavigate()

const handlechange = (event) => {
    setUserdata({...userdata ,[event.target.name]:event.target.value})
}
console.log(userdata);

const handleSubmit = async (event) => {
    event.preventDefault();
    if (userdata.name && userdata.email && userdata.password && userdata.confirmpassword && userdata.role) {
        if (userdata.password === userdata.confirmpassword) {
            const response = await axios.post("http://localhost:8000/register", { userdata });
            if (response.data.success) {
                setUserdata({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                router('/Login')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

        } else {
            toast.error("Password and Confirm Password not Matched.")
        }
    } else {
        toast.error("All fields are mandtory.")
    }
}

  return (

    <div id='reg-body'> 

        <div id='reg-form'>

            <div id='com-img'>
                <h2>Welecome to Shoppers <br /> Stop</h2>
                <p>Let's get you registered!</p>

            </div>

            {/* onSubmit={handleSubmit} */}
        <form  onSubmit={handleSubmit} >
            {/* <label htmlFor="">Name</label> */}
            <input type="text" onChange={handlechange} name='name' placeholder='Name*' value={userdata.name} /> <br />

            {/* <label htmlFor="">Email</label> */}
           <input type="email" onChange={handlechange} name='email' placeholder='Email*'  />  
           <br />

<label>ROLE</label>   
<select id="select" onChange={handleRole}>
  <option value="Buyer">Buyer</option>
  <option value="Seller">Seller</option>
</select> <br />


           {/* <label htmlFor="">Password</label> */}
           <input type='password' onChange={handlechange } name='password' placeholder='Password *'/>  <br />

           <input type='confirmpassword' onChange={handlechange } name='confirmpassword' placeholder='confirm password *'/>  <br />

           <input type="submit" />

           <p className='reg-email'>Login using <u>Email</u></p>

           {/* <button>abc</button> */}


        </form>
        </div>


       



    </div>
  )


}

export default Register