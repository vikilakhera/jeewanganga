import React from 'react';

import Join from '../../common/join';
import MainScreen from '../../common/mainScreen';
import girlEdu2 from '../../images/girlEdu2.jpeg';
import Initiatives from './initiatives';

export default function AboutUs() {
  return (
		<div>
			<MainScreen
				image={girlEdu2}
				altText='Girl Education'
				heading='About Us'
				text='Some Text'
			/>
			<Initiatives />
			<Join />
		</div>
	)
}