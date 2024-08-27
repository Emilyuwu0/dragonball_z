import "../styles/App.css";
import ArrowDown from "../assets/arrow.png";
import Sayayin from "../api/filters/sayayin";
import About from "../components/about/index";
/* import ApiDBZCharacters from "../api/characters"; */
export default function Home() {
  const header = [
    {
      id: 1,
      title: "Inicio",
      href: "#",
    },
    {
      id: 2,
      title: " Personajes",
      href: "#",
    },
    {
      id: 3,
      title: " Transformaciones",
      href: "#",
    },
    {
      id: 4,
      title: " Planetas",
      href: "#",
    },
  ];
  return (
    <div>
      <div className="banner-hero">
        <div className="header-content">
          {header.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
        <span className="title-hero">
          Dragon
          <br />
          Ball
        </span>
      </div>
      <div className="btn-down">
        <img src={ArrowDown} width={20} alt="arrow" />
      </div>

<About/>
      <Sayayin />
    </div>
  );
}
