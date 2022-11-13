import React from 'react';

import Donate from '../../common/donate';
import Join from '../../common/join';
import Carousel from '../../components/carousel';
import OurWork from './ourWork';
import WhoAreWe from './whoAreWe';

export default function Home() {
  return (
		<div>
			<div>
				<Carousel />
				<WhoAreWe />
				<OurWork />
				<Join />
				<Donate />
			</div>
		</div>

	)
}