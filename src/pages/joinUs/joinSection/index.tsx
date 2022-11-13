import './joinSection.css';

import JoinUsCard from '../../../components/joinUsCard';
import { DUMMY_TEXT } from '../../../constants';

function JoinSection() {
  const JOIN_SECTION_MAP = [
    {
      heading: 'Become a Member',
      text: DUMMY_TEXT
    },
    {
      heading: 'Become a Volunteer',
      text: DUMMY_TEXT
    }
  ]

  return (
    <div className='jsnWrapper'>
      <div className='jsnContentWrapper'>
        {
          JOIN_SECTION_MAP.map(item => (
            <JoinUsCard
              heading={item.heading}
              text={item.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default JoinSection;