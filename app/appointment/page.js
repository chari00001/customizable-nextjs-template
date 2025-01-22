'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Book a Service">
        {/*Book Service Start*/}
        <section className="book-service">
            <div className="book-service__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/book-services-bg-img-1.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="book-service__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Book a Service</span>
                                <h2 className="section-title__title">Flexible Repair Options
                                    <br/> That Work For You</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <h3 className="book-service__title">12 Months Warranty</h3>
                                        <p className="book-service__text">Duis aute irure dolor in repreh enderit in volup
                                            tate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-low-price"></span>
                                        </div>
                                        <h3 className="book-service__title">Low Cost Services</h3>
                                        <p className="book-service__text">Duis aute irure dolor in repreh enderit in volup
                                            tate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-delivery-man"></span>
                                        </div>
                                        <h3 className="book-service__title">Fast Delivery</h3>
                                        <p className="book-service__text">Duis aute irure dolor in repreh enderit in volup
                                            tate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="book-service__single">
                                        <div className="book-service__icon">
                                            <span className="icon-headphones"></span>
                                        </div>
                                        <h3 className="book-service__title">24/7 Live Support</h3>
                                        <p className="book-service__text">Duis aute irure dolor in repreh enderit in volup
                                            tate velit esse cillum dolore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="book-service__right">
                            <p className="book-service__right-text">Sed ut perspiciatis unde omnis iste natus error sit
                                doloremque on laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                            <div className="book-service__right-img">
                                <img src="assets/images/resources/book-service-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Book Service End*/}

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

        {/*Contact Page Two Start*/}
        <section className="contact-page-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page-two__left">
                            <form action="assets/inc/sendemail.php"
                                className="contact-page-two__form contact-form-validated" >
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="email" placeholder="Email" name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Subject" name="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact-page-two__form-input-box">
                                            <input type="text" placeholder="Pick a date" name="date" id="datepicker"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-page-two__form-input-box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select Services">Select Services</option>
                                                    <option value="1">Select Services 01</option>
                                                    <option value="2">Select Services 02</option>
                                                    <option value="3">Select Services 03</option>
                                                    <option value="3">Select Services 04</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-page-two__form-input-box text-message-box">
                                            <textarea name="message" placeholder="Comment"></textarea>
                                        </div>
                                        <div className="contact-page-two__btn-box">
                                            <Link href="about" className="thm-btn contact-page-two__btn">Send Message</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page-two__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">MAKE APPOINTMENT</span>
                                <h2 className="section-title__title">Book A Services</h2>
                            </div>
                            <p className="contact-page-two__right-text">Duis aute irure dolor in repreh enderit volup tate
                                velit esse cillum dolore</p>
                            <p className="contact-page-two__right-text-2">Duis aute irure dolor in repreh enderit in volup
                                tate cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free market web
                                bites eius mod ut labore duis</p>
                            <div className="contact-page-two__points-box-inner">
                                <div className="contact-page-two__points-box">
                                    <h3 className="contact-page-two__points-title">New York</h3>
                                    <ul className="contact-page-two__points-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-send"></span>
                                            </div>
                                            <div className="text">
                                                <p>71890 Champlin Neck</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-mail"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="mailto:support@domain.com">support@domain.com</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="tel:62813221467">(+62) 81 322 1467</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>09:00 AM - 22:00 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-page-two__points-box">
                                    <h3 className="contact-page-two__points-title">Texas</h3>
                                    <ul className="contact-page-two__points-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-send"></span>
                                            </div>
                                            <div className="text">
                                                <p>71890 Champlin Neck</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-mail"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="mailto:support@domain.com">support@domain.com</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link href="tel:62813221467">(+62) 81 322 1467</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>09:00 AM - 22:00 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page Two End*/}

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

            </Layout>
        </>
    )
}