import TextField            from "./TextField";
import FormSubmitBtn        from "./FormSubmitBtn";
import useInputState        from "../../hooks/useInputState";


const RegisterForm        = () => {
  const [userName, handleUserNameChange, resetUserName]
    = useInputState('');
  const [password, handlePasswordChange, resetPassword]
    = useInputState('');
  const formSubmit        = (e) => {
    e.preventDefault ();

    resetUserName ();
    resetPassword ();
  }

  return (
    <div className="login-form">
      <form onSubmit={formSubmit}>
        <TextField value={userName} onChange={handleUserNameChange}/>
        <TextField value={password} onChange={handlePasswordChange} type="password"/>
        <FormSubmitBtn value="Submit"/>
      </form>
    </div>
  );
}

export default RegisterForm;