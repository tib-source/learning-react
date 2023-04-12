import Button from "./Button";



const Header = ({ title, toggleAdd, showAdd }) => {
  
  function cond(condition, value1, value2=""){
    return condition ? value1 : value2
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={toggleAdd} text={cond(showAdd, "Close", "Add")} color={cond(showAdd, "red", "green")} />
    </header>
  );
};

Header.defaultProps = {
  title: "Tibebe's Tasks",
};

export default Header;
