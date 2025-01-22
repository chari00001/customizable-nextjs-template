'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Price List">
        {/*Core Services Start*/}
        <section className="core-services">
            <div className="core-services__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/core-services-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="core-services__left">
                            <div className="core-services__img">
                                <img src="assets/images/services/core-services-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="core-services__right">
                            <div className="section-title section-title--two text-left">
                                <span className="section-title__tagline">CORE SERVICE</span>
                                <h2 className="section-title__title">First aid, for all your device
                                    problem</h2>
                                <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free
                                    text market web bites eius mod ut labore duis aute irure pari</p>
                            </div>
                            <ul className="list-unstyled core-services__list">
                                <li>
                                    <div className="icon">
                                        <span className="icon-checked"></span>
                                    </div>
                                    <div className="content">
                                        <h5>Same Day Repairs</h5>
                                        <p>Lorem ipsum dolor sit amet at labore consectetur</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-repair"></span>
                                    </div>
                                    <div className="content">
                                        <h5>Guarantee Service</h5>
                                        <p>Lorem ipsum dolor sit amet at labore consectetur</p>
                                    </div>
                                </li>
                            </ul>
                            <Link href="contact" className="thm-btn core-services__btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Core Services End*/}

        {/*Pricing One Start*/}
        <section className="pricing-one">
            <div className="container">
                <div className="pricing-one__top">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="pricing-one__top-left">
                                <div className="section-title section-title--two text-left">
                                    <span className="section-title__tagline">REPAIR PRICE LIST</span>
                                    <h2 className="section-title__title">Affordable Price For You</h2>
                                    <p className="section-title__text">There are many variations of passages of Lorem Ipsum
                                        available, <br/> but the majority have suffered alteration in some words which
                                        <br/> don't look even slightly believable. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="pricing-one__top-right">
                                <Link href="appointment" className="thm-btn pricing-one__btn">Make Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-one__bottom">
                    {/*Pricing One Single Start*/}
                    <div className="pricing-one__single">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="pricing-one__img-box">
                                    <img src="assets/images/resources/pricing-one-img-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="pricing-one__content-box">
                                    <div className="pricing-one__content-title-box">
                                        <h4 className="pricing-one__content-title">Personal Computer Repair</h4>
                                        <p className="pricing-one__content-text">There are many variations of passages of
                                            Lorem Ipsum available, but the
                                            majority have suffered alteration</p>
                                    </div>
                                    <ul className="list-unstyled pricing-one__Repair-list">
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Screen Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$65</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Charging Port Repair</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$45</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Battery Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$85</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Software Reset</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$55</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="pricing-one__single pricing-one__single--two">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="pricing-one__content-box">
                                    <div className="pricing-one__content-title-box">
                                        <h4 className="pricing-one__content-title">Personal Computer Repair</h4>
                                        <p className="pricing-one__content-text">There are many variations of passages of
                                            Lorem Ipsum available, but the
                                            majority have suffered alteration</p>
                                    </div>
                                    <ul className="list-unstyled pricing-one__Repair-list">
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Screen Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$65</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Charging Port Repair</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$45</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Battery Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$85</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Software Reset</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$55</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="pricing-one__img-box">
                                    <img src="assets/images/resources/pricing-one-img-1-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="pricing-one__single">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="pricing-one__img-box">
                                    <img src="assets/images/resources/pricing-one-img-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="pricing-one__content-box">
                                    <div className="pricing-one__content-title-box">
                                        <h4 className="pricing-one__content-title">Personal Computer Repair</h4>
                                        <p className="pricing-one__content-text">There are many variations of passages of
                                            Lorem Ipsum available, but the
                                            majority have suffered alteration</p>
                                    </div>
                                    <ul className="list-unstyled pricing-one__Repair-list">
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Screen Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$65</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Charging Port Repair</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$45</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Battery Replacement</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$85</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pricing-one__Repair-product-name-box">
                                                <h5 className="pricing-one__Repair-product-name">Software Reset</h5>
                                                <p className="pricing-one__Repair-product-text">Lorem ipsum dolor sit
                                                    elit consectur sed eiusmod tempor aliquat</p>
                                            </div>
                                            <div className="pricing-one__Repair-product-price-box">
                                                <p className="pricing-one__Repair-product-price">$55</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                </div>
            </div>
        </section>
        {/*Pricing One End*/}

        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="contact-two-bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/contact-two-bg.jpg)' }} ></div>
            <div className="container">
                <div className="contact-two__inner">
                    <div className="section-title section-title--two text-center">
                        <span className="section-title__tagline">Contact Us</span>
                        <h2 className="section-title__title">Get support for your problem</h2>
                        <p className=" section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                            cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply </p>
                    </div>
                    <div className="contact-two__details-box">
                        <ul className="list-unstyled contact-two__details">
                            <li>
                                <div className="icon">
                                    <span className="fa fa-envelope"></span>
                                </div>
                                <div className="content">
                                    <span>Send us an email</span>
                                    <p><Link href="mailto:contact@gmail.com">contact@gmail.com</Link></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="content">
                                    <span>Give us a call</span>
                                    <p><Link href="tel:0124357689">+012 (435) 7689</Link></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two  End*/}

        {/*Services One Start*/}
        <section className="services-one">
            <div className="services-one-shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="services-one-shape-2 float-bob-y">
                <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">OUR SERVICES</span>
                    <h2 className="section-title__title">Our Efficient Solution</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                <div className="services-one__icon">
                                    <span className="icon-laptop"></span>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="services-details">Laptop Repair</Link></h3>
                                <p className="services-one__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                                <div className="services-one__btn-box">
                                    <Link href="services-details" className="thm-btn services-one__btn">Repair Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single Start*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                <div className="services-one__icon">
                                    <span className="icon-phone"></span>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="services-details">Phone Repair</Link></h3>
                                <p className="services-one__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                                <div className="services-one__btn-box">
                                    <Link href="services-details" className="thm-btn services-one__btn">Repair Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single Start*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                <div className="services-one__icon">
                                    <span className="icon-tap"></span>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="services-details">Tablet Repair</Link></h3>
                                <p className="services-one__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                                <div className="services-one__btn-box">
                                    <Link href="services-details" className="thm-btn services-one__btn">Repair Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single Start*/}
                </div>
            </div>
        </section>
        {/*Services One End*/}

            </Layout>
        </>
    )
}