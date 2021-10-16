import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { GoogleLogout,GoogleLogin } from 'react-google-login';
import "./login_page.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async response => {

    console.log(response.profileObj);

    const { email, name, imageUrl} = response.profileObj;
    try {
      await  app.auth()
  .createUserWithEmailAndPassword(email,name);

    app.firestore()
      .collection("users")
      .doc(email)
      .set({
        email:email,
        name:name,
        avatar:imageUrl,

      })
  
      history.push("/DashBoard");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  const responseGoogle = (response) => {
  console.log(response);
}
  


  return (
    <div className="Auth">
       <div className="left_comp">

          <h4>Sigup </h4>
          <h1> NFTGRAM </h1>
          <p onClick={()=>history.push("/login")}>Already have an account ? Login Now</p>
        </div>
        
         <div className="right_comp">
              <GoogleLogin
                clientId={'550326662797-jap6e1jqnft0r7175knkng8v3robf1ut.apps.googleusercontent.com'}
                onSuccess={handleSignUp}
                onFailure={responseGoogle}
                uxMode={true}
              >
   
               <span> Sign up with Google</span>
              </GoogleLogin>

          </div>

    </div>
  );
};

export default withRouter(SignUp);
