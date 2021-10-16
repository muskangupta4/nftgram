import React, { useCallback, useContext } from "react";
import { withRouter, Redirect ,useHistory} from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { GoogleLogout,GoogleLogin } from 'react-google-login';
import "./login_page.css";


const Login = ({ history }) => {
    

    const { currentUser } = useContext(AuthContext);


  const handleLogin = useCallback(
    async response => {
      console.log(response.profileObj);

    const { email, name, } = response.profileObj;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email, name);
        history.push("/DashBoard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


    const responseGoogle = (response) => {
  console.log(response);
}

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Auth">
        
        <div className="left_comp">

          <h4>Login </h4>
          <h1> NFTGRAM </h1>
          <p onClick={()=>history.push("/signup")}>Don't have any account ? Signup Now</p>
        </div>
          
         <div className="right_comp">
          <GoogleLogin
             
            clientId={'550326662797-jap6e1jqnft0r7175knkng8v3robf1ut.apps.googleusercontent.com'}
            onSuccess={handleLogin}
            onFailure={responseGoogle}
          >
          <span> Login with Google</span>
        </GoogleLogin>

        </div>


    </div>
  );
};

export default withRouter(Login);


