import './donate.css';

import girlEdu1 from '../../images/girlEdu1.jpeg';

function Donate() {
  return (
    <div className="dntWrapper">
      <div className="dntContent">
        <div className="dntContentLeft">
          <div className="dntLeftHeading">
            Help underprivileged with education
          </div>
          <div className="dntLeftText">
            Some Quote
          </div>
          <button
            className="dntDonateButton"
          >
            Donate
          </button>
        </div>
        <div className="dntContentRight">
        <img src={girlEdu1} alt="Girl Education" className='dntRightImage' />
        </div>
      </div>
    </div>
  )
}

export default Donate;