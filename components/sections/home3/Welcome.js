'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Link from "next/link"
export default function Welcome() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>


        {/*Welcome One Start*/}
        <section className="welcome-one">
            <div className="welcome-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/welcome-one-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="welcome-one__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Welcome To</span>
                                <h2 className="section-title__title">Our Repair Pro</h2>
                            </div>
                            <p className="welcome-one__text-1">If you are going to use a passage of Lorem Ipsum, you need to
                                be there isn't anything embarrassing hidden in the middle of text.</p>
                            <p className="welcome-one__text-2">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected
                                randomised words which don't look even slightly believable.</p>
                            <div className="welcome-one__btn-box">
                                <Link href="contact" className="welcome-one__btn thm-btn">Contact Us</Link>
                                <Link href="about" className="welcome-one__btn-2 thm-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="welcome-one__right">
                            <div className="welcome-one__right-img wow fadeInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/welcome-one-img-1.jpg" alt=""/>
                                <div className="welcome-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="welcome-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Welcome One End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
