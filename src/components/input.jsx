const Input = ({ req, type, placeholder, className, updateValue, value, disabled, checked }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        checked={checked}
        required={req}
        disabled={disabled}
        value={value}
        onChange={updateValue}
        className={`py-3 p-2 rounded-[10px] bg-transparent hover:border-white/50 border focus:border-white/50 active:border-border-white/50 w-full outline-none duration-300 ${className}`}
      />
    );
  };
  
  export default Input;