//import { NavLink } from "react-router-dom";
import { CustomLink } from "./CustomLink";

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <CustomLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Contacts
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Blog
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
