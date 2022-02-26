import { Link } from "react-router-dom";
const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

  const oneColour = randColour()

function Header({ filterProducts }) {
  return (
    <header
      className="header"
      style={{"--border-colour": `var(--${oneColour})` }}
    >
      <div className="header__logo" style={{ color: `var(--${oneColour})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to='/products' >Home</Link> 
          </li>
          <li>
            <Link to='/categories' >Categories</Link>
          </li>
          <li>
            <Link to='/basket' >Basket</Link>
          </li>
          <li>
          <input type="search" placeholder="Search product..."  className="searach" 
          onChange={(e) => {
            filterProducts(e.target.value)}}/>
        </li>
        </ul>
        
      </nav>
    </header>
  );
}
export default Header;
