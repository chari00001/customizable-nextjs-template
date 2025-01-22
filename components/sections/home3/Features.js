import Link from "next/link"


export default function Features() {
    return (
        <>
        {/*Feature One Start*/}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/*Feature One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-phone-call"></span>
                            </div>
                            <h3 className="feature-one__title"><Link href="services-details">Provide Mobile Repair
                                    Services</Link></h3>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-computer"></span>
                            </div>
                            <h3 className="feature-one__title"><Link href="services-details">Provide Computer Repair
                                    Services</Link></h3>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-computer-1"></span>
                            </div>
                            <h3 className="feature-one__title"><Link href="services-details">Provide Televisition Repair
                                    Services</Link></h3>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-laptop-1"></span>
                            </div>
                            <h3 className="feature-one__title"><Link href="services-details">Provide Laptop Repair
                                    Services</Link></h3>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                </div>
            </div>
        </section>
        {/*Feature One End*/}
        </>
    )
}
