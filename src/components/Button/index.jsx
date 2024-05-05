const Button = ({ children, onClick }) => {
  return (
    <button className="btn bg-primary btn-block" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
