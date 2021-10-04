const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "red",
};

export default Button;
