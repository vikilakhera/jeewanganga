import './footer.css';

import withWaypoint from '../../common/withWaypoint';

function Footer(props: any) {
  const { fade } = props ?? {};
  return (
    <div className="footerContainer">
      <div className="footer">

        <div className={fade ? "zoom-in-zoom-out footerLogo" : "footerLogo"} >
          <img src={''} alt="Logo" />
        </div>

        <div className={fade ? "fadeInUp contact" : "contact"} >
          <div className="contactText">Contact us</div>
          <a href="jeewanganga@gmail.com" target="_blank"><i className="fa fa-envelope"></i>jeewanganga@gmail.com</a>
        </div>

        <div className="follow">
          <div className="followText">Follow us on</div>

          <a href="https://twitter.com/ArufaResearch" target="_blank" rel='noreferrer'>
            <i className={fade ? "fadeInUp fab fa-twitter" : "fab fa-twitter"} ></i>
          </a>

          <a className="github" href="https://github.com/arufa-research" target="_blank" rel='noreferrer'>
            <i className={fade ? "fadeInUp fab fa-instagram" : "fab fa-instagram"}></i>
          </a>

          <a className="linkedIn" href="https://www.linkedin.com/in/arufa-research-295926213/" target="_blank" rel='noreferrer'>
            <i className={fade ? "fadeInUp fab fa-linkedin" : "fab fa-linkedin"}></i>
          </a>

        </div>
      </div>
      <div className="copyright">© 2022 Jeevan Ganga , Limited, All Rights Reserved.</div>
    </div>
  );
}

export default withWaypoint(Footer);