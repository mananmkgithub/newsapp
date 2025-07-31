import { ThemContext } from "../src/themecontex";
import { useContext } from "react";

function Footer() {
  const { t, handleonclick } = useContext(ThemContext);
  return (
    <footer
      className="text-center py-3 shadow-sm"
      style={{
        backgroundColor: `${t === 'dark' ? 'black' : 'white'}`,
        color: `${t === 'dark' ? 'white' : 'black'}`,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
        fontSize: "16px",
      }}
    >
      <p className="mb-0">
        © {new Date().getFullYear()} Developed by 
        <strong className="text-primary"><a href="https://github.com/mananmkgithub?tab=repositories">Mk</a></strong>
      </p>
    </footer>
  );
}

export default Footer;
