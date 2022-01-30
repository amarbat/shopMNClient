const FormSubmitBtn = ({value}) => {
  return (
    <div>
      <button>{value ? value : "Submit"}</button>
    </div>
  );
}

export default FormSubmitBtn;