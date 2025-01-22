'use client'
import CounterUp from "@/components/elements/CounterUp"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function Skill() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Two Section Start*/}
        <section className="two-section">
            <div className="two-section-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/two-section-bg.jpg)' }} >
            </div>
            {/*Skill Two Start*/}
            <div className="skill-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="skill-one__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Our Skills & Expertise</span>
                                    <h2 className="section-title__title">We Specialize In Quick &
                                        <br/> Professional Repairs</h2>
                                </div>
                                <p className="skill-one__text">There are many variations of passages of Lorem Ipsum
                                    available,
                                    but the majority have suffered alteration in some words which don't look even
                                    slightly
                                    believable.</p>
                                <p className="skill-one__text-2">There are many variations of passages of Lorem Ipsum
                                    available,
                                    but the majority have suffered alteration in some words which don't look even
                                    slightly
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
            </div>
            {/*Skill Two End*/}

            {/*Counter One Start*/}
            <div className="counter-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="counter-two__list list-unstyled">
                                <li className="counter-two__single">
                                <CounterUp end={20} />
                                    <span className="counter-two__plus">+</span>
                                    <p className="counter-two__text">Glorious Years</p>
                                </li>
                                <li className="counter-two__single">
                                <CounterUp end={2} />
                                    <span className="counter-two__plus">k+</span>
                                    <p className="counter-two__text">Happy Customer</p>
                                </li>
                                <li className="counter-two__single">
                                <CounterUp end={5} />
                                    <span className="counter-two__plus">k+</span>
                                    <p className="counter-two__text">Service Complete</p>
                                </li>
                                <li className="counter-two__single">
                                <CounterUp end={99} />
                                    <span className="counter-two__plus">%</span>
                                    <p className="counter-two__text">Satisfactions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*Counter One End*/}

        </section>
        {/*Two Section End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
