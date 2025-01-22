
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Blog & News">
                {/*Blog One Start*/}
                <div className="blog-page-v-1">
                    <div className="container">
                        <div className="section-title section-title--two text-center">
                            <span className="section-title__tagline">From Our Blog</span>
                            <h2 className="section-title__title">News And Articles</h2>
                            <p className="section-title__text">Duis aute irure dolor in repreh enderit in volup tate velit esse
                                cillum dolore <br/> eu fugiat nulla dolor atur with Lorem ipsum is simply </p>
                        </div>
                        <div className="row">
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">How To Fix Broken Back Glass On
                                                Your Phone</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">How To Fix Broken Screen On Your
                                                Laptop</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">What Is The Best Affordable
                                                Android Phone In 2023?</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">There are many variations of
                                                passages of Lorem</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-5.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">It is a long established fact
                                                that a reader</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src="assets/images/blog/blog-1-6.jpg" alt=""/>
                                        <div className="blog-one__plus">
                                            <Link href="blog-details"><i className="fa fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li>
                                                <Link href="blog-details"><i className="fa fa-calendar-alt"></i>5 AUG 2023</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details"><i className="far fa-comments"></i>02 COMMENTS</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-one__title"><Link href="blog-details">Lorem Ipsum is simply dummy text
                                                of</Link></h3>
                                        <div className="blog-one__btn-box">
                                            <Link href="blog-details" className="thm-btn blog-one__btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Blog One Single End*/}
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-page__pagination">
                                    <ul className="pg-pagination list-unstyled">
                                        <li className="count"><Link href="#">1</Link></li>
                                        <li className="count"><Link href="#">2</Link></li>
                                        <li className="count"><Link href="#">3</Link></li>
                                        <li className="next">
                                            <Link href="#" aria-label="Next"><i className="fa fa-angle-double-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Blog One End*/}

            </Layout>
        </>
    )
}