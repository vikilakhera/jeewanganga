import './join.css';

import { useNavigate } from 'react-router-dom';

import { JOIN_US } from '../../constants';
import poorChileEdu from '../../images/poorChildEdu.jpeg';

function Join() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(JOIN_US);
  }

  const joinImageStyle = {
    backgroundImage: `url(${poorChileEdu})`,
    height: '60vh',
    backgroundSize: 'cover',
    filter: 'brightness(0.3)',
    minHeight: '580px'
  }

  return (
    <div className="joinWrapper">
      <div style={joinImageStyle}></div>
      <div className='joinContent'>
        <div className='joinHeading'>
          Be the helping hand for unprivileged ones
        </div>
        <div className='joinText'>
          Become a Member or Volunteer
        </div>
        <button 
          className='joinButton'
          onClick={handleNavigation}
        >
          Join Us
        </button>
      </div>
    </div>
  )
}

export default Join;