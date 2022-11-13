import React from 'react';

import Donate from '../../common/donate';
import MainScreen from '../../common/mainScreen';
import girlEdu3 from '../../images/girlEdu3.jpeg';
import JoinSection from './joinSection';

export default function JoinUs() {
  return (
		<div>
			<MainScreen
				image={girlEdu3}
				altText='Girl Education'
				heading='Join Us'
				text='Some Text'
			/>
			<JoinSection />
			<Donate />
		</div>
	)
}