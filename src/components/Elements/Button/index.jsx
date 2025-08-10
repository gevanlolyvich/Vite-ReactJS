const Button = (props) => {
  const { children, variant = "bg-black", onClick = () => {}, type = "login" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold ${variant} rounded-md text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;