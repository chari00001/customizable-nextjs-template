import Link from "next/link"


export default function Services() {
    return (
        <>
        {/*Services Three Start*/}
        <section className="services-three">
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">OUR SERVICES</span>
                    <h2 className="section-title__title">Our Efficient Solution</h2>
                    <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                        cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
                </div>
                <div className="row">
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="services-three__single">
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-1.jpg" alt=""/>
                                </div>
                                <div className="services-three__hover-content">
                                    <p className="services-three__hover-text">There are many variations of passages of Lorem
                                        Ipsum available, but the majority</p>
                                    <div className="services-three__btn-box">
                                        <Link href="services-details" className="services-three__btn thm-btn">read
                                            more</Link>
                                    </div>
                                </div>
                            </div>
                            <h3 className="services-three__title"><Link href="services-details">Laptop Repair</Link>
                            </h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-three__single">
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-2.jpg" alt=""/>
                                </div>
                                <div className="services-three__hover-content">
                                    <p className="services-three__hover-text">There are many variations of passages of Lorem
                                        Ipsum available, but the majority</p>
                                    <div className="services-three__btn-box">
                                        <Link href="services-details" className="services-three__btn thm-btn">read
                                            more</Link>
                                    </div>
                                </div>
                            </div>
                            <h3 className="services-three__title"><Link href="services-details">Smart Phone Repair</Link>
                            </h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-three__single">
                            <div className="services-three__img-box">
                                <div className="services-three__img">
                                    <img src="assets/images/services/services-3-3.jpg" alt=""/>
                                </div>
                                <div className="services-three__hover-content">
                                    <p className="services-three__hover-text">There are many variations of passages of Lorem
                                        Ipsum available, but the majority</p>
                                    <div className="services-three__btn-box">
                                        <Link href="services-details" className="services-three__btn thm-btn">read
                                            more</Link>
                                    </div>
                                </div>
                            </div>
                            <h3 className="services-three__title"><Link href="services-details">Mac Repair</Link>
                            </h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                </div>
            </div>
        </section>
        {/*Services Three End*/}
        </>
    )
}
