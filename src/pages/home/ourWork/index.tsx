import './ourWork.css';

import withWaypoint from '../../../common/withWaypoint';

function OurWork({fade}: any) {

  return (
    <div className="ouwWrapper">
      <div className="ouwComponents">
      <h1 className={fade ? 'zoom-in-zoom-out ouwHeading' : 'ouwHeading'}>
        Our Work
      </h1>
        <div className='ouwContent'>
          <div className="ouwLeftSide">
            <div>
              Some Image
            </div>
          </div>
          <div className="ouwRightSide">
            <div className={fade ? 'zoom-in-zoom-out ouwRightSideContent' : 'ouwRightSideContent'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withWaypoint(OurWork);