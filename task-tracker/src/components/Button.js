const Button = ({ text, color, onClick}) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "red",
};

export default Button;
