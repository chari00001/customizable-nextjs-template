
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Team Members">
        {/*Team Top Start*/}
        <section className="team-top">
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">Meet Our Team</span>
                    <h2 className="section-title__title">We're Gadgetin, Profesional Gadget <br/> Repair Team</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore eu fugiat nulla <br/> dolor atur with Lorem ipsum is simply</p>
                    <Link href="contact" className="thm-btn team-top__btn">Contact Us</Link>
                </div>
            </div>
        </section>
        {/*Team Top End*/}

        {/*Experience One Start*/}
        <section className="experience-one about-page__experience">
            <div className="experience-one-shape-1 shapeMover"
                style={{ backgroundImage: 'url(assets/images/shapes/experience-one-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">About Experience</span>
                    <h2 className="section-title__title">We Have Than 20 Years Experience in Gadget
                        <br/>Smartphone & Laptop Repair Services</h2>
                </div>
                <div className="row">
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-service"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="services-details">Quality Services</Link>
                                </h3>
                                <p className="experience-one__text">Duis aute irure dolor in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-management"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="team">Professional Team</Link></h3>
                                <p className="experience-one__text">Duis aute irure dolor in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-headphones"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="contact">24 Hour Support</Link></h3>
                                <p className="experience-one__text">Duis aute irure dolor in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="counter-one__list list-unstyled">
                            <li className="counter-one__single">
                            <CounterUp end={20} />
                                <span className="counter-one__plus">+</span>
                                <p className="counter-one__text">Glorious Years</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={2} />
                                <span className="counter-one__plus">k+</span>
                                <p className="counter-one__text">Happy Customer</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={5} />
                                <span className="counter-one__plus">k+</span>
                                <p className="counter-one__text">Service Complete</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={99} />
                                <span className="counter-one__plus">%</span>
                                <p className="counter-one__text">Satisfactions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*Experience One End*/}

        {/*Team One Start*/}
        <section className="team-one">
            <div className="container">
                <div className="row">
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Nicolas Marko</Link></h3>
                                    <p className="team-one__sub-title">Master Technician</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Joseph Dico</Link></h3>
                                    <p className="team-one__sub-title">Digital Marketing</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Nicolas Marko</Link></h3>
                                    <p className="team-one__sub-title">Master Technician</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-4.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Hasnat Marko</Link></h3>
                                    <p className="team-one__sub-title">Master Technician</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-5.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Nicolas Poran</Link></h3>
                                    <p className="team-one__sub-title">Digital Marketing</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-6.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team">Hasibur Nico</Link></h3>
                                    <p className="team-one__sub-title">Master Technician</p>
                                </div>
                                <ul className="team-one__social list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                </div>
            </div>
        </section>
        {/*Team One End*/}

            </Layout>
        </>
    )
}