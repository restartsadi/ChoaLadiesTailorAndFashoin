import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignUp">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Generate a Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have An Account?<span>Login</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, i agree to the terms of use & privacy policy. </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
