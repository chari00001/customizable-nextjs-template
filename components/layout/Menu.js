import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

       
            <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <a href="/">Home </a>
                    <ul>
                        <li>
                            <section className="home-showcase">
                                <div className="container">
                                    <div className="home-showcase__inner">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-1.jpg" alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <a href="/" className="thm-btn home-showcase__buttons__item">View
                                                            Page</a>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        01</h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-2.jpg" alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <a href="index-2" className="thm-btn home-showcase__buttons__item">View
                                                            Page</a>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        02
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-3.jpg" alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <a href="index-3" className="thm-btn home-showcase__buttons__item">View
                                                            Page</a>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        03
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-4.jpg" alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <a href="index-dark" className="thm-btn home-showcase__buttons__item">View
                                                                Page</a>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">Home
                                                        Page
                                                        04
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="appointment">appointment</Link></li>
                        <li><Link href="gallery">Gallery</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="services-details">Services Details</Link></li>
                    
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog-v-1">Blog V-1</Link></li>
                        <li><Link href="blog-v-2">Blog V-2</Link></li>
                        <li><Link href="blog-details">Blog Details V-1</Link></li>
                        <li><Link href="blog-details-2">Blog Details V-2</Link></li>
                        <li><Link href="blog-details-3">Blog Details V-3</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
