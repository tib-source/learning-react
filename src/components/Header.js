import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button title="Add" color="red" />
    </header>
  );
};

Header.defaultProps = {
  title: "Tibebe's Tasks",
};

export default Header;
