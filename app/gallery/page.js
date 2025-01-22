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
export default function Gallery() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Gallery">
        {/*Gallery Page Start*/}
        <section className="gallery-page">
            <div className="container">
                <div className="row">
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-1.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-1.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-2.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-2.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-3.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-3.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-4.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-4.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-5.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-5.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <img src="assets/images/gallery/gallery-img-1-6.jpg" alt=""/>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-img-1-6.jpg"><span
                                            className="icon-search"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                </div>
            </div>
        </section>
        {/*Gallery Page End*/}

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