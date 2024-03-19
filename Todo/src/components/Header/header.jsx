import cls from "./header.module.css";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className="headerWrap">
        <div className={cls.headerLogo}>
          <img src={logo} alt="12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
