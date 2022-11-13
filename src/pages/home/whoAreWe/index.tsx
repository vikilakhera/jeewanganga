import './whoAreWe.css';

import { useNavigate } from 'react-router-dom';

import withWaypoint from '../../../common/withWaypoint';
import { ABOUT_US } from '../../../constants';

function WhoAreWe({fade}: any) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(ABOUT_US);
  }

  return (
    <div className="wawWrapper">
      <div className="wawComponents">
        <div className="wawLeftSide">
          <h1 className={fade ? 'zoom-in-zoom-out wawLeftSideHeading' : 'wawLeftSideHeading'}>
            Who are we ?
          </h1>
        </div>
        <div className="wawRightSide">
          <div className={fade ? 'zoom-in-zoom-out wawRightSideContent' : 'wawRightSideContent'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className='wawSeeMoreButtonWrapper'>
            <button 
              className='wawSeeMoreButton wawSlideRight'
              onClick={handleNavigation}
            >
              See More &nbsp;
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withWaypoint(WhoAreWe);