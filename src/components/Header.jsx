import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id="banner">
      <h2><Link to="/">Jack Miller</Link></h2>
      <nav>
        <ul>
          <li><Link to="/contact" title="contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
