import { useContext } from "react";
import { ThemContext } from "../src/themecontex";

function Navbar({ setcategory }) {
  const categories = ['technology', 'business', 'health', 'sports', 'entertainment'];
  const { t, handleonclick } = useContext(ThemContext);
  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm sticky-top ${t === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-white"
        }`}
      style={{ fontFamily: "'Poppins', sans-serif", transition: "all 0.3s ease" }}
    >
      <div className="container">
        <a
          className={`navbar-brand fw-bold fs-4 ${t === "dark" ? "text-warning" : "text-primary"}`}
          href="#"
          onClick={() => setcategory("general")}
        >
          📰 News<span className={t === "dark" ? "text-light" : "text-dark"}>App</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: t === "dark" ? "invert(1)" : "none" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center align-items-center">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className={`btn nav-link mx-2 text-capitalize ${t === "dark" ? "text-light" : "text-dark"
                    }`}
                  style={{
                    backgroundColor: "transparent",
                    fontWeight: "500",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => setcategory(cat)}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = t === "dark" ? "#333" : "#f0f0f0")
                  }
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  {cat}
                </button>
              </li>
            ))}

            {/* Theme toggle button */}
            <li className="nav-item mx-2">
              <button
                onClick={handleonclick}
                className={`btn btn-sm ${t === "dark" ? "btn-light" : "btn-dark"}`}
              >
                {t === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
