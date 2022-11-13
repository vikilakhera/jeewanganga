import './carousel.css';

import girlEdu1 from '../../images/girlEdu1.jpeg';
import girlEdu2 from '../../images/girlEdu2.jpeg';
import girlEdu3 from '../../images/girlEdu3.jpeg';

export default function Carousel() {

  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={girlEdu1} alt="Girl Education" className='carouselImage' />
          <div className="carousel-caption">
            <h3>Girl Education</h3>
            <p>Girl Education</p>
          </div>   
        </div>
        <div className="carousel-item">
          <img src={girlEdu2} alt="Girl Education" className='carouselImage' />
          <div className="carousel-caption">
            <h3>Girl Education</h3>
            <p>Girl Education</p>
          </div>   
        </div>
        <div className="carousel-item">
          <img src={girlEdu3} alt="Girl Education" className='carouselImage' />
          <div className="carousel-caption">
            <h3>Girl Education</h3>
            <p>Girl Education</p>
          </div>   
        </div>

      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  )
}