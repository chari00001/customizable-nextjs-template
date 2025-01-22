import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
export default function Header3({ scroll, handlePopup, handleMobileMenu }) {
  return (
    <>
      <header className="main-header-two main-header-three">
        <div className="main-header-two__top">
          <div className="container">
            <div className="main-header-two__top-inner">
              <ul className="list-unstyled main-header-three__contact-list">
                <li>
                  <div className="icon">
                    <i className="fas fa-phone-square"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="tel:926668880000">+92 (666) 888 0000</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="mailto:hello@gardon.com">
                        hello@gardon.com
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="main-header-two__social-box">
                <p className="main-header-two__social-title">Social Sharing</p>
                <div className="main-menu-two__social">
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-two main-menu-three">
          <div className="main-menu-two__wrapper">
            <div className="container">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/">
                      <img src="assets/images/resources/logo-2.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__main-menu-box">
                    <Link
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                    ></Link>
                    <Menu />
                  </div>
                  <div className="main-menu-two__search-cart-btn-box">
                    <div className="main-menu-two__search-box">
                      <Link
                        href="#"
                        className="main-menu-two__search search-toggler icon-search-interface-symbol"
                        onClick={handlePopup}
                      ></Link>
                    </div>
                    <div className="main-menu-two__cart-box">
                      <Link
                        href="cart"
                        className="main-menu-two__cart fas fa-shopping-cart"
                      ></Link>
                    </div>
                    <div className="main-menu-two__btn-box">
                      <Link
                        href="appointment"
                        className="thm-btn main-menu-two__btn"
                      >
                        Book A Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
      <div
        className={`stricky-header stricked-menu main-menu main-menu-two main-menu-three ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu main-menu-two main-menu-three">
            <div className="main-menu-two__wrapper">
              <div className="container">
                <div className="main-menu-two__wrapper-inner">
                  <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                      <Link href="/">
                        <img src="assets/images/resources/logo-2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu-two__right">
                    <div className="main-menu-two__main-menu-box">
                      <Link
                        href="#"
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars"></i>
                      </Link>
                      <Menu />
                    </div>
                    <div className="main-menu-two__search-cart-btn-box">
                      <div className="main-menu-two__search-box">
                        <Link
                          href="#"
                          className="main-menu-two__search search-toggler icon-search-interface-symbol"
                          onClick={handlePopup}
                        ></Link>
                      </div>
                      <div className="main-menu-two__cart-box">
                        <Link
                          href="cart"
                          className="main-menu-two__cart fas fa-shopping-cart"
                        ></Link>
                      </div>
                      <div className="main-menu-two__btn-box">
                        <Link
                          href="appointment"
                          className="thm-btn main-menu-two__btn"
                        >
                          Book A Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
