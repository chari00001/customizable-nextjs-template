import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*Site Footer Start*/}
            <footer className="site-footer">
                <div className="site-footer-shape-1 float-bob-y"
                    style={{ backgroundImage: 'url(assets/images/shapes/site-footer-shape-1.png)' }} ></div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="#"><img src="assets/images/resources/footer-logo.png" alt=""/></Link>
                                    </div>
                                    <div className="footer-widget__about-text-box">
                                        <p className="footer-widget__about-text">Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="footer-widget__social-box">
                                        <h4 className="footer-widget__social-title">Stay Connected</h4>
                                        <div className="site-footer__social">
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__links">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Quick Links</h3>
                                    </div>
                                    <ul className="footer-widget__Explore-list list-unstyled">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="about">About Us</Link></li>
                                        <li><Link href="services">Services</Link></li>
                                        <li><Link href="blog-v-1">Blog</Link></li>
                                        <li><Link href="contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Our Services</h3>
                                    </div>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><Link href="services-details">Smartphone Repair</Link></li>
                                        <li><Link href="services-details">Laptop Repair</Link></li>
                                        <li><Link href="services-details">Desktop Repair</Link></li>
                                        <li><Link href="services-details">Tablet Repair</Link></li>
                                        <li><Link href="services-details">Smart Watch Repair</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__Contact">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Contact Us</h3>
                                    </div>
                                    <ul className="footer-widget__Contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-map"></span>
                                            </div>
                                            <div className="text">
                                                <p>32 Main Street, Miami, <br/> Florida 19091, FL</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-headphones"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link href="tel:6668880000">666 888 0000</Link>
                                                    <Link href="tel:4448880000">444 888 0000</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                                                    <Link href="mailto:company@gmail.com">company@gmail.com</Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text">© 2024 Copyright by <Link href="https://themeforest.net/user/thememx">Thememx</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer End*/}

        </>
    )
}
