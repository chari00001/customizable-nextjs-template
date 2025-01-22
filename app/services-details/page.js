'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"
import ModalVideo from 'react-modal-video'
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
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Phone Repair">
        {/*Fixing One Start*/}
        <section className="fixing-one">
            <div className="fixing-one__bg float-bob-y"
                style={{ backgroundImage: 'url(assets/images/backgrounds/fixing-one-bg-img-1.png)' }} ></div>
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">WHAT WE FIXING</span>
                    <h2 className="section-title__title">Providing device solutions</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="fixing-one__left">
                            <div className="fixing-one__img">
                                <img src="assets/images/resources/fixing-1-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="fixing-one__right">
                            <div className="fixing-one__points-box">
                                <ul className="fixing-one__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tap"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Cracked Screen</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-cell"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Battery Replacement</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-os"></span>
                                        </div>
                                        <div className="content">
                                            <h3>OS Update</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-setting"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Water Damage</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="fixing-one__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-smartphone-1"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Charging Repair</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-speaker"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Speaker Not Working</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-headphones"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Headphone Jack</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-nfc"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Wifi / Bluetooth</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Fixing One End*/}

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
                                <Link href="faq" className=" thm-btn faq-one__btn">Ask Questions Here</Link>
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

        {/*Skill One Start*/}
        <section className="skill-one">
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
                                        <div className="bar-inner count-bar" data-percent="84%"  style={{width: '84%'}}>
                                            <div className="count-text">84%</div>
                                            <h4 className="skill-one__progress-title">Diagnostics</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="95%"  style={{width: '95%'}}>
                                            <div className="count-text">95%</div>
                                            <h4 className="skill-one__progress-title">Replacment</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-one__progress-single">
                                    <div className="bar marb-0">
                                        <div className="bar-inner count-bar" data-percent="86%"  style={{width: '86%'}}>
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
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

            </Layout>
        </>
    )
}