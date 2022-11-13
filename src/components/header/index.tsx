import './header.css';

import {
  useEffect,
  useState,
} from 'react';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {
  ABOUT_US,
  HEADER_MENU_MAP,
  HOME,
  JOIN_US,
} from '../../constants';

function Header() {
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [headerColor, setHeaderColor] = useState({background: 'var(--black50)'})

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (location?.pathname === JOIN_US) {
      setActive(2);
    } else if (location?.pathname === ABOUT_US) {
      setActive(1);
    } else if (location?.pathname === HOME) {
      setActive(0);
    }
  }, [ location.pathname ])

  const changeHeaderColor = () => {
    if (window.scrollY > 600) {
      setHeaderColor({background: 'var(--black)'})
    } else {
      setHeaderColor({background: 'var(--black50)'})
    }
  }

  window.addEventListener('scroll', changeHeaderColor);
  

  const handleActive = (index: number, route: string) => {
    setActive(index);
    navigate(route)
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="header" style={headerColor}>
      <div className="headerLogo">
        {/* <a href="#">
          <img src={arufa} alt="arufa" />
        </a> */}
        Logo
      </div>
      <i className="fa fa-bars" onClick={handleShowMenu}></i>
      <div className="burgerMenu">
        <ul className="menuList">
          {
            (showMenu) ? (
              HEADER_MENU_MAP.map((item, index) => {
                return (

                  <li className={(active === index) ? "activeBurger menuItem" : "menuItem"}>
                    <div 
                      className="burgerNavItems"
                      onClick={() => handleActive(index, item.route)}
                    >
                      {item.name}
                    </div>
                  </li>

                )
              })
            ) : (
              <div></div>
            )
          }
        </ul>
      </div>
      <div className="headerMenu">
        {
          HEADER_MENU_MAP.map((item, index) => {
            return (
              <div 
                className={(active === index) ? "navItemActive navItems slideRight" : "navItems slideRight"} 
                onClick={() => handleActive(index, item.route)}
              >
                {item.name}
              </div>
            )
          })
        }
        <div className='donateButton'>
          Donate
        </div>
      </div>
    </div>
  );
}

export default Header;