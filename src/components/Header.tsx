import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header id="banner">
      <h2><Link to="/">Jack Miller</Link> <span className="header-copyright">&copy; {new Date().getFullYear()}</span></h2>
      <nav>
        <ul>
          <li><NavLink to="/" end>About Me</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/speaking">Speaking</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
