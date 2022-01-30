const TextField = ({onChange, value, type}) => {
  return (
    <div className="text-field">
      <input type={type ? type : "text"} onChange={onChange} value={value}/>
    </div>
  );
}

export default TextField;