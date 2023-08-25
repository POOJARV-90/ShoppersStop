import React, { useContext, useState } from "react";
import "../Component/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Authcontext } from "./Context/Authcontext";

const Login = () => {

  const {state , dispatch} = useContext(Authcontext)
  const [userdata, setUserdata] = useState({ email: "", password: "" });
  const router = useNavigate();

  // const close = (props) => {
  // props.setShowLogin(false);
  // props.setDisplay(false);
  // }
  const hangleChange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if ( userdata.email && userdata.password) {
      
            const response = await axios.post("http://localhost:8000/login", { userdata });
            if (response.data.success) {
            //   console.log(response.data,"data");
            //    const token  = response.data.token;
            //    const user = response.data.user;
            // // console.log(user,"userdata");
            //   await login(token , user)

            dispatch({
              type: 'LOGIN',
              payload: response.data.user
          })
          localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserdata({ email: "", password: "" })
                router('/')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }

       
    } else {
        toast.error("All fields are mandtory.")
    }
}

  return (
    <div id="log-body">
      <div id="log-form">
        <div id="com-log-img">
          <h2>Login/Signup</h2>
          <p>for a tailored experience</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={hangleChange}
            name="email"
            placeholder="Email*"
          />{" "}
          <br />
          {/* <label htmlFor="">Password</label> */}
          <input
            type="password"
            onChange={hangleChange}
            name="password"
            placeholder="Password *"
          />{" "}
          <br />
          <input type="submit" value="Continue" />
          <p className="reg-email">
            Login using <u>Email</u>
          </p>
          <div id="login-with">
            <img
              src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.13 3.49c-2.2.773-4.102 2.437-5.172 4.518-.357.713-.654 1.486-.773 2.318-.416 1.961-.119 4.101.773 5.885a8.768 8.768 0 0 0 2.496 3.031 8.373 8.373 0 0 0 3.329 1.664 9.43 9.43 0 0 0 4.636.06 7.882 7.882 0 0 0 3.745-1.962c1.13-1.01 1.902-2.318 2.318-3.804.476-1.545.535-3.21.238-4.815h-8.56v3.567h4.934a4.15 4.15 0 0 1-1.843 2.793c-.594.417-1.307.654-2.02.773a6.83 6.83 0 0 1-2.2 0c-.713-.119-1.426-.475-2.02-.891a5.46 5.46 0 0 1-2.081-2.794c-.416-1.13-.416-2.378 0-3.566.297-.773.713-1.546 1.308-2.14a4.79 4.79 0 0 1 2.734-1.486c.891-.179 1.783-.179 2.675.119a5.843 5.843 0 0 1 1.961 1.129l1.664-1.664.892-.892a9.32 9.32 0 0 0-2.913-1.843 9.8 9.8 0 0 0-6.122 0z' fill='%23fff'/%3E%3Cpath d='M9.13 3.49c1.96-.654 4.16-.654 6.121.06 1.07.416 2.08 1.01 2.913 1.842l-.892.892-1.664 1.664a4.365 4.365 0 0 0-1.961-1.13 5.79 5.79 0 0 0-2.675-.118c-1.01.238-1.962.773-2.734 1.486a5.35 5.35 0 0 0-1.308 2.14C5.92 9.553 4.968 8.78 3.958 8.008c1.07-2.08 2.972-3.745 5.171-4.518z' fill='%23EA4335'/%3E%3Cpath d='M3.185 10.326c.178-.773.416-1.545.773-2.318 1.01.773 1.961 1.545 2.972 2.318-.416 1.13-.416 2.378 0 3.566-1.01.773-1.962 1.546-2.972 2.319-.892-1.843-1.189-3.923-.773-5.885z' fill='%23FBBC05'/%3E%3Cpath d='M12.101 10.386h8.56c.297 1.604.237 3.269-.238 4.814a8.472 8.472 0 0 1-2.318 3.804c-.951-.772-1.902-1.486-2.913-2.258a4.515 4.515 0 0 0 1.843-2.794H12.1v-3.566z' fill='%234285F4'/%3E%3Cpath d='M3.958 16.21c1.01-.772 1.961-1.545 2.972-2.317a5.46 5.46 0 0 0 2.08 2.793c.595.416 1.308.713 2.021.892a6.828 6.828 0 0 0 2.2 0c.713-.119 1.426-.416 2.02-.773.952.773 1.903 1.486 2.913 2.259a8.737 8.737 0 0 1-3.745 1.961c-1.545.357-3.15.357-4.636-.059-1.189-.297-2.318-.892-3.329-1.664-1.01-.892-1.902-1.962-2.496-3.091z' fill='%2334A853'/%3E%3C/svg%3E"
              alt=""
            />
            <img
              src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.618 6.245h3.047V3h-3.047c-2.52 0-4.357 2.092-4.357 4.666V9.46H7v3.05h3.261v9.157h3.595V12.51h3.234l.577-3.05h-3.81V7.32c0-.613.4-1.075.761-1.075z' fill='%233B5999'/%3E%3C/svg%3E"
              alt=""
            />
          </div>
          {/* <button>abc</button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
