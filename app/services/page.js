'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

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
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Our services">
        {/*Services Two Start*/}
        <section className="services-two">
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">OUR SERVICES</span>
                    <h2 className="section-title__title">Our Efficient Solution</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon">
                                    <span className="icon-phone"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Mobile Phone</Link></h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon services-two__icon--two">
                                    <span className="icon-tap"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Tablet</Link></h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon services-two__icon--three">
                                    <span className="icon-laptop"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Laptop</Link></h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon services-two__icon--three">
                                    <span className="icon-computer"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Computer Desktop</Link>
                                </h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon">
                                    <span className="icon-camera"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Camera</Link></h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="services-two__single">
                            <div className="services-two__single-inner">
                                <div className="services-two__icon services-two__icon--two">
                                    <span className="icon-smartwatch"></span>
                                </div>
                                <h3 className="services-two__title"><Link href="services-details">Wearable Device</Link></h3>
                                <p className="services-two__text">Duis aute irure dolor in repreh enderit in volup tate
                                    velit esse cillum dolore fugiat nulla dolor atur</p>
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Two End*/}

        {/*Newsletter One Start*/}
        <section className="newsletter-one">
            <div className="newsletter-one-bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/newsletter-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">NEWSLETTER</span>
                    <h2 className="section-title__title">Join Our Newsletter</h2>
                    <p className=" section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply </p>
                </div>
                <form className="newsletter-one__form">
                    <div className="newsletter-one__input-box">
                        <input type="email" placeholder="Your Email" name="email"/>
                        <button type="submit" className="thm-btn newsletter-one__btn">Subscribe Now</button>
                    </div>
                </form>
            </div>
        </section>
        {/*Newsletter One End*/}

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

        {/*FAQ One Start*/}
        <section className="faq-one">
            <div className="faq-one-shape-1 shapeMover"
                style={{ backgroundImage: 'url(assets/images/shapes/faq-one-shape.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Have Question?</span>
                                <h2 className="section-title__title">Frequently Asked Question</h2>
                            </div>
                            <p className="faq-one__text-1">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected randomised words
                                which don't look even slightly believable. There are many variations of passages of
                                Lorem Ipsum available,
                                but the majority have suffered alteration</p>
                            <p className="faq-one__text-2">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected randomised words
                                which don't look even slightly believable. There are many variations </p>
                            <div className="faq-one__btn-box">
                                <Link href="#" className=" thm-btn faq-one__btn">Ask Questions Here</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Can you clean my phone or device?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by words which don't
                                                look even slightly believable.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Do you offer a warranty?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by words which don't
                                                look even slightly believable.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>How Many Locations Do You Have?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by words which don't
                                                look even slightly believable.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Is there a charge for the loaner phone service?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by words which don't
                                                look even slightly believable.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}

        {/*Counter One Start*/}
        <section className="counter-one">
            <div className="counter-one__bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/counter-one-bg.jpg)' }} ></div>
            <div className="container">
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
        {/*Counter One End*/}

        {/*Why Choose One Start*/}
        <section className="why-choose-one">
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">Why Choose Us</span>
                    <h2 className="section-title__title">Gadget Repair For Everyone</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-award"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="services-details">Warranty Service</Link>
                                </h3>
                                <p className="why-choose-one__text">Duis aute irure dolor in repreh enderit in
                                    volup tate velit esse cillum dolore eu fugiat</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-customer-service"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="services-details">Customer Service</Link>
                                </h3>
                                <p className="why-choose-one__text">Duis aute irure dolor in repreh enderit in
                                    volup tate velit esse cillum dolore eu fugiat</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-security"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="services-details">Secured Device</Link>
                                </h3>
                                <p className="why-choose-one__text">Duis aute irure dolor in repreh enderit in
                                    volup tate velit esse cillum dolore eu fugiat</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="400ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-computer-1"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="services-details">No Virus Threat</Link>
                                </h3>
                                <p className="why-choose-one__text">Duis aute irure dolor in repreh enderit in
                                    volup tate velit esse cillum dolore eu fugiat</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="why-choose-one__bottom">
                            <p className="why-choose-one__bottom-text">Get proper services from us <Link
                                    href="about">guideline and
                                    knowledge</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose One End*/}

            </Layout>
        </>
    )
}