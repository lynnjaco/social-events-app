import blLocallyLogo from '../../src/assets/bllocally.png';
import { Link } from 'react-router-dom';
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        <img src={blLocallyLogo} alt="Locally" />
      </Link>
      <ul>
        <Link to="/">
          <li>Browse Events</li>
        </Link>
        <li>Profile</li>
      </ul>
    </nav>
  );
}
