import './assets/css/style.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css';

function Header() {
  return (
    <div className="Header">
     <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span>FlexStart</span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#1hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#1about">About</a></li>
          <li><a className="nav-link scrollto" href="#1services">Services</a></li>
          <li><a className="nav-link scrollto" href="#1portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#1team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#1"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#1">Drop Down 1</a></li>
              <li className="dropdown"><a href="#1"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#1">Deep Drop Down 1</a></li>
                  <li><a href="#1">Deep Drop Down 2</a></li>
                  <li><a href="#1">Deep Drop Down 3</a></li>
                  <li><a href="#1">Deep Drop Down 4</a></li>
                  <li><a href="#1">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#1">Drop Down 2</a></li>
              <li><a href="#1">Drop Down 3</a></li>
              <li><a href="#1">Drop Down 4</a></li>
            </ul>
          </li>

          <li className="dropdown megamenu"><a href="#1"><span>Mega Menu</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="#1">Column 1 link 1</a>
                <a href="#1">Column 1 link 2</a>
                <a href="#1">Column 1 link 3</a>
              </li>
              <li>
                <a href="#1">Column 2 link 1</a>
                <a href="#1">Column 2 link 2</a>
                <a href="#1">Column 3 link 3</a>
              </li>
              <li>
                <a href="#1">Column 3 link 1</a>
                <a href="#1">Column 3 link 2</a>
                <a href="#1">Column 3 link 3</a>
              </li>
              <li>
                <a href="#1">Column 4 link 1</a>
                <a href="#1">Column 4 link 2</a>
                <a href="#1">Column 4 link 3</a>
              </li>
            </ul>
          </li>

          <li><a className="nav-link scrollto" href="#1contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#1about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  );
}

export default Header;
