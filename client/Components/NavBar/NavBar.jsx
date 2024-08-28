import blLocallyLogo from '../../src/assets/bllocally.png';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <Link to="/">
          <img className="logo" src={blLocallyLogo} alt="Locally" />
        </Link>
        <ul>
          <li>
            <img
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              class="w-10 h-10 rounded-full cursor-pointer"
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt="User dropdown"
            />

            {/* <!-- Dropdown menu --> */}
            <div
              id="userDropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div class="font-medium truncate">name@random.com</div>
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p>Jane Doe</p>
              <span>Brooklyn, NY</span>
            </div>
          </li>
        </ul>
      </nav>
      <Menu />
    </div>
  );
}
