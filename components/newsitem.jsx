import image from "../src/assets/news.jpg"
import { useContext } from "react";
import { ThemContext } from "../src/themecontex";

const Newsitem = ({ title, description, src, url }) => {
  const { t, handleonclick } = useContext(ThemContext);
  return (
    <div
      className="card mx-auto shadow-sm"
      style={{
        maxWidth: "350px",
        width: "100%",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        border: "none",
        borderRadius: "10px",
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="News"
        style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />
      <div className={`card-body ${t === 'dark' ? 'bg-dark':' bg-white'}`}>
        <h5 className="card-title text-primary fw-semibold">
          {title?.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text text-secondary" style={{ fontSize: "0.95rem" }}>
          {description ? description.slice(0, 90) + "..." : "No description available."}
        </p>
        <a
          href={url}
          className={`btn btn-sm ${t === 'dark' ? 'bg-white text-dark' : 'bg-primary text-white' }`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderRadius: "20px", padding: "5px 15px", fontWeight: "500" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
