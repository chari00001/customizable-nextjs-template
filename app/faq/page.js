'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faq() {
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
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Help & FAQs">
        {/*FAQ Page Start*/}
        <section className="faq-two">
            <div className="faq-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-two-bg.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Have Question?</span>
                    <h2 className="section-title__title">Frequently Asked Question</h2>
                </div>
                <p className="faq-two__text">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum
                    dolore <br/>
                    eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion faq-one-accrodion-1"
                                data-grp-name="faq-one-accrodion-1">
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
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion faq-one-accrodion-2"
                                data-grp-name="faq-one-accrodion-2">
                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
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
                                <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
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
                                <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
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
                                <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
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
        {/*FAQ Page End*/}

        {/*Contact Three Start*/}
        <section className="contact-four">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Still Have Question?</span>
                    <h2 className="section-title__title">Let Us Know Or Call Us At <br/> <span>207-8767-002</span></h2>
                </div>
                <div className="contact-four__form-box">
                    <form action="assets/inc/sendemail.php" className="contact-one__form contact-form-validated"
                        >
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-four__input-box">
                                    <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-four__input-box">
                                    <input type="email" placeholder="Email Address" name="email"/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-four__input-box">
                                    <input type="text" placeholder="Subject" name="Subject"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="contact-four__input-box text-message-box">
                                    <textarea name="message" placeholder="Comment"></textarea>
                                </div>
                                <div className="contact-four__btn-box">
                                    <button type="submit" className="thm-btn contact-four__btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}

            </Layout>
        </>
    )
}