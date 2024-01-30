import './App.css';
import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';

function Footer() {
    return (
      <div className="Footer">
 <footer id="footer" className="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 text-center">
        <h4>Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
      </div>
      <div className="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-info">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""/>
          <span>FlexStart</span>
        </a>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div className="social-links mt-3">
          <a href="twitter" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="facebook" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="instagram" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#=linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <a href="home">Home</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="aboutus">About us</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="services">Services</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="terms">Terms of service</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="policy">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <a href="design">Web Design</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="development">Web Development</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="management">Product Management</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="marketing">Marketing</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="graphic">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022<br/>
          United States <br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>

      </div>

    </div>
  </div>
</div>

<div className="container">
  <div className="copyright">
    &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer>
      </div>
    );
    
  }

  export default Footer;