import React, { useContext, useEffect, useState } from 'react'
import "../Component/Navbar.css"
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { Authcontext } from './Context/Authcontext';


const Navbar = () => {
  const {state} = useContext(Authcontext)
  const [showLogin, setShowLogin] = useState(false);
  const[display,setDisplay] = useState(false)
  const [userdata , setUserdata] = useState({});
  const router = useNavigate();
  // ---------------------for on mouse down menu------------------

  const handleMouseEnter = () => {
    setDisplay(true)
  }

  const handleMouseLeave = () => {
    setDisplay(false)
  }

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  

  // ---------------------------------
  
   
  useEffect(() => {
    if (state?.user) {
      setUserdata(state?.user);
    } else {
      setUserdata({});
    }
  }, [state]);

  function logout() {    ///tobechange
    localStorage.removeItem("Token")

    setUserdata({})
    // setDisplay(false)
    router('/')
}

  return (
    <>
    <div id='parent'>
      <div>
        <span className='style-for-categories'>CATEGORIES</span>
        <span>LUXE</span>
        <span  className='style-for-categories'>BARGAINS</span>



      </div>
      <div onClick={()=>router("/")} >
        <img src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg" alt="" />
      </div>
      <div id='all-sections'>

        <div>
          <input type="search" placeholder='Search Products & Brands' />
          <img src="data:image/svg+xml,%0A%3Csvg width='26' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.781 3.86a7.922 7.922 0 1 0 0 15.843 7.922 7.922 0 0 0 0-15.844zm-9.14 7.921a9.14 9.14 0 1 1 18.28 0 9.14 9.14 0 0 1-18.28 0z' fill='%23000' stroke='%23000' stroke-width='.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.382 17.383a.61.61 0 0 1 .862 0l4.936 4.936a.61.61 0 1 1-.862.862l-4.936-4.936a.61.61 0 0 1 0-.862z' fill='%23000' stroke='%23000' stroke-width='.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A" alt="" />
        </div>
        <div>
           <span>
          <img src="data:image/svg+xml,%0A%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M0 0h24v24H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.593 21.48c.117.09.26.14.407.14.147 0 .29-.05.407-.14 3.706-2.88 6.26-5.36 8.046-7.807 2.28-3.126 2.8-6.013 1.547-8.58-.893-1.833-3.467-3.32-6.46-2.46A6.58 6.58 0 0 0 12 5.147a6.58 6.58 0 0 0-3.54-2.514c-3-.873-5.567.627-6.46 2.46-1.253 2.567-.733 5.454 1.547 8.58 1.786 2.447 4.34 4.927 8.046 7.807zM3.2 5.673A3.933 3.933 0 0 1 6.753 3.72c.452.002.9.067 1.334.193a5.287 5.287 0 0 1 3.293 2.8.667.667 0 0 0 1.233 0 5.333 5.333 0 0 1 3.294-2.8c2.226-.626 4.226.434 4.893 1.767 1.033 2.113.573 4.473-1.427 7.207A38.087 38.087 0 0 1 12 20.107a38.088 38.088 0 0 1-7.373-7.227C2.633 10.153 2.167 7.793 3.2 5.673z' fill='%23000'/%3E%3C/svg%3E%0A" alt="" />
        </span>
        <span onClick={()=>router("/Cart")}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M24 0H0v24h24V0z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.546 6.522c.24-.215.552-.335.875-.335H19.58a1.312 1.312 0 0 1 1.304 1.168l1.334 12a1.311 1.311 0 0 1-1.305 1.457H3.088a1.311 1.311 0 0 1-1.305-1.457l1.334-12c.035-.321.188-.618.429-.833zm.875.79a.187.187 0 0 0-.186.167l-1.333 12a.187.187 0 0 0 .186.209h17.824a.188.188 0 0 0 .186-.209l-1.333-12a.187.187 0 0 0-.186-.167H4.42z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.563A3.187 3.187 0 0 0 8.812 5.75v3a.563.563 0 0 1-1.124 0v-3a4.312 4.312 0 1 1 8.625 0v3a.562.562 0 1 1-1.125 0v-3A3.187 3.187 0 0 0 12 2.562z' fill='%23000'/%3E%3C/svg%3E" alt="" />
        </span>
        {userdata?.email?
        <>

       
        <div className='login'  onMouseEnter={handleMouseEnter} >
           <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3344 3.41323C11.5361 3.29453 11.7659 3.23193 12 3.23193C12.2341 3.23193 12.4639 3.29453 12.6656 3.41323C12.8673 3.53193 13.0337 3.70242 13.1473 3.90703L15.9085 8.87712C15.9312 8.91807 15.9685 8.94903 16.0129 8.96388C16.0574 8.97874 16.1057 8.97643 16.1485 8.9574L20.8908 6.84975C21.1141 6.75049 21.3607 6.71555 21.6028 6.74889C21.8449 6.78222 22.0729 6.88249 22.2611 7.0384C22.4494 7.19432 22.5903 7.39969 22.6681 7.63138C22.7459 7.86306 22.7574 8.11187 22.7014 8.34977L20.3116 18.5057C20.2706 18.678 20.1953 18.8403 20.09 18.9827C19.9847 19.1252 19.8517 19.2449 19.699 19.3346C19.5463 19.4243 19.377 19.4823 19.2014 19.5049C19.0263 19.5275 18.8485 19.5145 18.6785 19.4668C14.3061 18.2607 9.68874 18.2612 5.3166 19.4682C5.14669 19.5158 4.96891 19.5288 4.79388 19.5062C4.61814 19.4836 4.4488 19.4257 4.29603 19.3359C4.14327 19.2461 4.01025 19.1263 3.90498 18.9838C3.79971 18.8412 3.72437 18.6789 3.68348 18.5065L3.6832 18.5053L1.29771 8.34891C1.24184 8.11104 1.25348 7.86228 1.33133 7.63067C1.40917 7.39904 1.55013 7.19376 1.73833 7.03791C1.92653 6.88206 2.1545 6.78185 2.39657 6.74855C2.63864 6.71525 2.8852 6.75019 3.1085 6.84943L7.85145 8.9574C7.89425 8.97643 7.94263 8.97874 7.98706 8.96388C8.03149 8.94902 8.06875 8.91807 8.0915 8.87712L10.8527 3.90703C10.9663 3.70242 11.1327 3.53193 11.3344 3.41323ZM12 4.35693C11.9666 4.35693 11.9337 4.36588 11.9049 4.38283C11.8761 4.39979 11.8523 4.42415 11.8361 4.45338L9.07493 9.42347C8.91567 9.71013 8.65487 9.92679 8.34387 10.0308C8.03288 10.1348 7.69421 10.1186 7.39454 9.98544L2.65159 7.87746C2.61969 7.86329 2.58447 7.8583 2.54989 7.86305C2.51531 7.86781 2.48274 7.88213 2.45585 7.90439C2.42897 7.92666 2.40883 7.95598 2.39771 7.98907C2.38659 8.02216 2.38493 8.05769 2.39291 8.09168L4.77812 18.2469C4.77815 18.247 4.77808 18.2467 4.77812 18.2469C4.78401 18.2715 4.7949 18.2951 4.80993 18.3154C4.82505 18.3359 4.84416 18.3531 4.8661 18.366C4.88804 18.3789 4.91236 18.3872 4.93761 18.3905C4.96285 18.3937 4.98849 18.3918 5.01298 18.3849L5.01611 18.384C9.58491 17.1226 14.4101 17.1221 18.9791 18.3827L18.9822 18.3836C19.0067 18.3905 19.0324 18.3924 19.0576 18.3891C19.0828 18.3859 19.1071 18.3776 19.1291 18.3647C19.151 18.3518 19.1701 18.3346 19.1852 18.3141C19.2003 18.2937 19.2111 18.2705 19.217 18.2458C19.217 18.2457 19.217 18.2459 19.217 18.2458L21.6063 8.09207C21.6143 8.05809 21.6127 8.02255 21.6016 7.98945C21.5905 7.95635 21.5703 7.92701 21.5434 7.90474C21.5166 7.88246 21.484 7.86814 21.4494 7.86338C21.4148 7.85861 21.3796 7.8636 21.3477 7.87778L16.6054 9.98544C16.3058 10.1186 15.9671 10.1348 15.6561 10.0308C15.3451 9.92679 15.0843 9.71013 14.9251 9.42347L12.1639 4.45338C12.1477 4.42415 12.1239 4.39979 12.0951 4.38283C12.0663 4.36588 12.0334 4.35693 12 4.35693Z' fill='black'/%3E%3C/svg%3E" alt="" />
           <span>{state?.user?.name} </span>
           <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.102 8.602c.22-.22.576-.22.796 0L12 15.704l7.102-7.102a.562.562 0 1 1 .796.796l-7.5 7.5a.562.562 0 0 1-.796 0l-7.5-7.5a.563.563 0 0 1 0-.796z' fill='%23000'/%3E%3C/svg%3E" alt="" />
          </div>

        { display &&
                     <div id='menu-down' onMouseLeave={handleMouseLeave}>
                      <p> <i class="fa-solid fa-crown"></i> MY Profile</p>
                      <p onClick={()=>router("/Cart")}> <i class="fa-solid fa-cart-shopping"></i> MY Order</p>
                      <p> <i class="fa-regular fa-user"></i> MY Account</p>
                      <p onClick={logout}> <i class="fa-solid fa-right-from-bracket"></i>Logout</p>

                      {/*   */}

                     </div>
                 }
        </>
        :
        <span onClick={handleLoginClick}>
           
          <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3.563a8.438 8.438 0 1 0 0 16.875 8.438 8.438 0 0 0 0-16.875zM2.437 12a9.563 9.563 0 1 1 19.126 0 9.563 9.563 0 0 1-19.125 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 8.063a3.188 3.188 0 1 0 0 6.375 3.188 3.188 0 0 0 0-6.376zM7.687 11.25a4.312 4.312 0 1 1 8.625 0 4.312 4.312 0 0 1-8.625 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 15.563a6.19 6.19 0 0 0-5.517 3.383.563.563 0 0 1-1.003-.51 7.315 7.315 0 0 1 13.04 0 .563.563 0 0 1-1.003.51A6.19 6.19 0 0 0 12 15.562z' fill='%23000'/%3E%3C/svg%3E" alt="" />
        </span>
        }

        </div>
        

    
      </div>
      {/* change */}
      {showLogin && <Login  onClose={() => setShowLogin(false)}
      
      />} 

     
    </div>

    <div id='categories'>
      <div>
      <span onClick={()=>router("/Multipleproduct")} > MEN</span>
      <span onClick={()=>router("/Multipleproduct")}>WOMEN</span>
      <span onClick={()=>router("/Multipleproduct")}>BEAUTY</span>
      <span onClick={()=>router("/Multipleproduct")} >WATCHES</span>
      <span onClick={()=>router("/Multipleproduct")}>KIDS</span>
      <span>HOMESTOP</span>
      <span>GIFT</span>
      <span>BRANDS</span>
      </div>
     

    </div>

    </>

  )
}

export default Navbar