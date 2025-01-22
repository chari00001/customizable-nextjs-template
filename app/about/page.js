'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}



export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={2} footerStyle={4} breadcrumbTitle="About company">
        


        {/*About Two Start*/}
        <section className="about-two about-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-two__left">
                            <div className="about-two__main-progress-box">
                                <div className="about-two__progress-single">
                                    <div className="about-two__progress-box">
                                        <div className="circle-progress"
                                            data-options='{ "value": 0.8,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'  style={{width: '85%'}}>
                                        </div>{/* /.circle-progress */}
                                        <div className="about-two__pack">
                                            <p>85%</p>
                                        </div>
                                    </div>
                                    <div className="about-two__progress-content">
                                        <p>Repair Device</p>
                                    </div>
                                </div>
                                <div className="about-two__progress-single">
                                    <div className="about-two__progress-box">
                                        <div className="circle-progress"
                                            data-options='{ "value": 0.9,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'  style={{width: '95%'}}>
                                        </div>{/* /.circle-progress */}
                                        <div className="about-two__pack">
                                            <p>95%</p>
                                        </div>
                                    </div>
                                    <div className="about-two__progress-content">
                                        <p>Replace Device</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-two__img-box">
                                <div className="about-two__img">
                                    <img src="assets/images/resources/about-2-1.jpg" alt=""/>
                                </div>
                                <div className="about-two__img-two">
                                    <img src="assets/images/resources/about-2-2.jpg" alt=""/>
                                    <div className="about-two__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="about-two__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="about-two__shape-1 shapeMover">
                                <img src="assets/images/shapes/about-two-shape-1.png" alt=""/>
                            </div>
                            <div className="about-two__shape-2 float-bob-y">
                                <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-two__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Quality Repair</span>
                                <h2 className="section-title__title">We Can Fix It Almost As Fast
                                    As You Can Break It.</h2>
                            </div>
                            <p className="about-two__text-1">Duis aute irure dolor in repreh enderit in volup tate velit
                                esse cillum dolore</p>
                            <ul className="list-unstyled about-two__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-award"></span>
                                    </div>
                                    <div className="text">
                                        <p>WE ALWAYS PUT QUALITY FIRST</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-community"></span>
                                    </div>
                                    <div className="text">
                                        <p>CUSTOMER SATISFACTION IS ABSOLUTE</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-warranty"></span>
                                    </div>
                                    <div className="text">
                                        <p>FAST AND QUALITY WORK</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="about-two__text-2">Duis aute irure dolor in repreh enderit in volup tate velit
                                esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free text
                                market web bites eius mod ut labore duis aute irure pari</p>
                            <Link href="about" className="thm-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

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

        {/*Skill One Start*/}
        <section className="skill-one about-page__skill-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="skill-one__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Our Skills & Expertise</span>
                                <h2 className="section-title__title">We Specialize In Quick &
                                    <br/> Professional Repairs</h2>
                            </div>
                            <p className="skill-one__text">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some words which don't look even slightly
                                believable.</p>
                            <p className="skill-one__text-2">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some words which don't look even slightly
                                believable.</p>
                            <div className="skill-one__progress">
                                <div className="skill-one__progress-single">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="84%" style={{width: '84%'}}>
                                            <div className="count-text">84%</div>
                                            <h4 className="skill-one__progress-title">Diagnostics</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="95%" style={{width: '95%'}}>
                                            <div className="count-text">95%</div>
                                            <h4 className="skill-one__progress-title">Replacment</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <div className="bar marb-0">
                                        <div className="bar-inner count-bar" data-percent="86%" style={{width: '86%'}}>
                                            <div className="count-text">86%</div>
                                            <h4 className="skill-one__progress-title">Device Repair</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="skill-one__right">
                            <div className="skill-one__right-img-box wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="skill-one__right-img">
                                    <img src="assets/images/resources/skill-1-1.jpg" alt=""/>
                                    <div className="skill-one__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="skill-one__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="skill-one__video-content">
                                    <p>Improve gadget smartphone laptop repair services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Skill One End*/}

        {/*Company Details Start*/}
        <div className="company-details">
            <div className="container">
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="company-details__single">
                            <div className="company-details__single-inner">
                                <div className="company-details__icon">
                                    <span className="icon-management"></span>
                                </div>
                                <h3 className="company-details__title"><Link href="about">Who We Are</Link></h3>
                                <p className="company-details__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="company-details__single">
                            <div className="company-details__single-inner">
                                <div className="company-details__icon">
                                    <span className="icon-book"></span>
                                </div>
                                <h3 className="company-details__title"><Link href="about">Our Vision</Link></h3>
                                <p className="company-details__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="company-details__single">
                            <div className="company-details__single-inner">
                                <div className="company-details__icon">
                                    <span className="icon-award"></span>
                                </div>
                                <h3 className="company-details__title"><Link href="about">Our Mission</Link></h3>
                                <p className="company-details__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </div>
        {/*Company Details End*/}

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

        {/*Testimonial One Start*/}
        <section className="testimonial-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-left">
                            <span className="section-title__tagline">OUR HAPPY CLIENTS</span>
                            <h2 className="section-title__title">Our Customers Review</h2>
                        </div>
                        <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel">
                            {/*testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-info-box">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">Sed ut perspiciatis unde omnis iste natus error
                                            sit laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                            beatae dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                            quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                        <div className="testimonial-one__client-info">
                                            <h3>Nicolas Marko</h3>
                                            <p>Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*testimonial One Single End*/}
                            {/*testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-info-box">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">Sed ut perspiciatis unde omnis iste natus error
                                            sit laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                            beatae dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                            quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                        <div className="testimonial-one__client-info">
                                            <h3>Nicolas Marko</h3>
                                            <p>Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*testimonial One Single End*/}
                            {/*testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-info-box">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">Sed ut perspiciatis unde omnis iste natus error
                                            sit laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                            beatae dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                            quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                        <div className="testimonial-one__client-info">
                                            <h3>Nicolas Marko</h3>
                                            <p>Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*testimonial One Single End*/}
                            {/*testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-info-box">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">Sed ut perspiciatis unde omnis iste natus error
                                            sit laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                            beatae dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                            quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                        <div className="testimonial-one__client-info">
                                            <h3>Nicolas Marko</h3>
                                            <p>Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*testimonial One Single End*/}
                            {/*testimonial One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-info-box">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">Sed ut perspiciatis unde omnis iste natus error
                                            sit laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                            beatae dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                            quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                        <div className="testimonial-one__client-info">
                                            <h3>Nicolas Marko</h3>
                                            <p>Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*testimonial One Single End*/}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial One End*/}

        {/*Team One Start*/}
        <section className="team-one">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Meet Our Team</span>
                    <h2 className="section-title__title">Introduce Our Team Members</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
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
                    <div className="col-xl-4 col-lg-4">
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
                    <div className="col-xl-4 col-lg-4">
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
                </div>
            </div>
        </section>
        {/*Team One End*/}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


