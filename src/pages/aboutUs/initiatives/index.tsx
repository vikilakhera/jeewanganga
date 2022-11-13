import './initiatives.css';

import InitiatvesCard from '../../../components/initiativesCard';
import { DUMMY_TEXT } from '../../../constants';
import girlEdu1 from '../../../images/girlEdu1.jpeg';
import girlEdu2 from '../../../images/girlEdu2.jpeg';
import girlEdu3 from '../../../images/girlEdu3.jpeg';

function Initiatives() {
  const INITIATIVE_MAP = [
    {
      image: girlEdu2,
      altText: 'Girl Child',
      heading: 'Girls Education',
      text: DUMMY_TEXT
    },
    {
      image: girlEdu1,
      altText: 'Girl Child',
      heading: 'Women Empowerment',
      text: DUMMY_TEXT
    },
    {
      image: girlEdu3,
      altText: 'Girl Child',
      heading: 'Malnutrition',
      text: DUMMY_TEXT
    }
  ]

  return (
    <div className='intWrapper'>
      <div className='intContentWrapper'>
        <div className='intHeadingWrapper'>
          <div className='intHorizontalLine'></div>
          <div className='intHeadingParent'>
            <h1 className='intHeading'>Our Initiatives</h1>
          </div>
        </div>
        <div className='intCardsWrapper'>
          {
            INITIATIVE_MAP.map(item => (
              <div className='intCard'>
                <InitiatvesCard
                  image={item.image}
                  altText={item.altText}
                  heading={item.heading}
                  text={item.text}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Initiatives;