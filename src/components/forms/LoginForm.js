import TextField from "./TextField";
import FormSubmitBtn from "./FormSubmitBtn";
import useInputState from "../../hooks/useInputState";


const LoginForm = () => {
  const [userName, handleUserNameChange, resetUserName]  = useInputState('');
  const [password, handlePasswordChange, resetPassword]  = useInputState('');

  return (
    <div className="login-form">
      <form onSubmit={e=> {
        e.preventDefault();
        // TODO: send request to backend.
        alert ("clicked");
        resetUserName ();
        resetPassword ();
      }}>
        <TextField value={userName} onChange={handleUserNameChange}/>
        <TextField value={password} onChange={handlePasswordChange} type="password"/>
        <FormSubmitBtn value="Submit"/>
      </form>
    </div>
  );
}

export default LoginForm;