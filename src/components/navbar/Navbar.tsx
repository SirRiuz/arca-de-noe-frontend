
import {
  BrandingWatermark,
  CalendarToday,
  LocalOffer,
  Person,
  Pets,
  Search,
  Pets as Services,
  Store,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import CartIcon from "../cart/CartIcon";
import "./Navbar.css";
import { useSearch } from "../SearchContext/SearchContext"; 
import data from "../../data/dogProduct.json"; 

const Navbar = () => {
  const navigate = useNavigate(); 
  const { setSearchTerm, setSearchResults } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.length > 0) {
      const results = data.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.category.toLowerCase().includes(term) ||
        item.brand.toLowerCase().includes(term) ||
        item.tags.some((tag: string) => tag.toLowerCase().includes(term))
      );
      setSearchResults(results);
      navigate("/Ecommerce");
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🐾</span>
            <span 
            className="logo-text" 
            onClick={() => {
              navigate("/Ecommerce");
            }}>
              Arca de noé
              </span>
          </a>

          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar alimentos, marcas, mascotas..."
              className="search-input"
              onChange={handleSearch}
            />
          </div>

          <div className="top-menu">
            <a href="#">
              <Store fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Sucursales</span>
            </a>
            <a href="#">
              <Person fontSize="small" className="menu-icon" />
              <span
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Mi cuenta
              </span>
            </a>
            <IconButton className="cart-button" color="inherit">
              {/* <Badge badgeContent={cartItems} color="error"> */}
              {/* <ShoppingCart /> */}
              <CartIcon />
              {/* </Badge> */}
            </IconButton>
          </div>
        </div>
      </nav>

      {/* SNABVAR 2 */}

      <nav className="main-menu" >
        <ul >
          <li>
            <a href="#">
              <Pets fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Mascotas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BrandingWatermark fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Marcas
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <LocalOffer fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Ofertas</span>
            </a>
          </li>
          <li>
            <a href="#" >
              <Services fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Servicios</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CalendarToday fontSize="small" className="menu-icon" />
              <span
              onClick={() => {
                navigate("/Login");
              }}
              >Envío programado</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
