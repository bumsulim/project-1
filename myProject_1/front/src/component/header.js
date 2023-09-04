import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
        <ul className="Header-navbar">
          <li>
            <Link to='/'>L. portfolio</Link>
          </li>
          <li>
            <input type="text" placeholder="게시물 검색"></input>
          </li>
          <li>
            <Link to='/introduce'>Introduce</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
        </ul>
    </div>
  );
}

export default Header;