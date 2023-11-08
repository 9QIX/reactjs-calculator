import ThemeSwitcher from "@/components/header/ThemeSwitcher";

const Header = ({ HandleThemeChange }) => {
  return (
    <header>
      <h1>React JS Calculator</h1>
      {/* <ThemeSwitcher HandleThemeChange={HandleThemeChange} /> */}
    </header>
  );
};

export default Header;
