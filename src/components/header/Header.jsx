import ThemeSwitcher from "@/components/header/ThemeSwitcher";

const Header = ({ HandleThemeChange }) => {
  return (
    <header>
      <img src="./public/logo.png"></img>
      <h1>AliBuMacMal Calculator</h1>
      {/* <ThemeSwitcher HandleThemeChange={HandleThemeChange} /> */}
    </header>
  );
};

export default Header;
