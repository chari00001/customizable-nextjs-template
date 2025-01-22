import Link from "next/link"


export default function Process() {
    return (
        <>
            {/*Process One Start*/}
        <section className="process-one">
            <div className="process-one__bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/process-one-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Working Process</span>
                    <h2 className="section-title__title">See our 4 easy steps how
                        we works</h2>
                </div>
                <div className="row">
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__icon">
                                <span className="icon-computer"></span>
                                <div className="process-one__count-box"></div>
                            </div>
                            <h3 className="process-one__title">Damage Device</h3>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__icon">
                                <span className="icon-send"></span>
                                <div className="process-one__count-box"></div>
                            </div>
                            <h3 className="process-one__title">Send it to Us</h3>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__icon">
                                <span className="icon-setting"></span>
                                <div className="process-one__count-box"></div>
                            </div>
                            <h3 className="process-one__title">Repair Device</h3>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="process-one__single">
                            <div className="process-one__icon">
                                <span className="icon-product"></span>
                                <div className="process-one__count-box"></div>
                            </div>
                            <h3 className="process-one__title">Quick Return</h3>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                </div>
            </div>
        </section>
        {/*Process One End*/}
        </>
    )
}
