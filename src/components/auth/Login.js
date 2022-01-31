import LoginForm from "../forms/LoginForm";


const Login = () => {

  return (
    <div className="Login">
      <div className="login-container">
        <LoginForm/>
        <div className="info">
          <div className="login-info-forgot-pass">
            Forgot Password
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
