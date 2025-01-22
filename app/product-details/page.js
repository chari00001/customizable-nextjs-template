'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    
    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Product Details">
        {/*Product Details Start*/}
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__img">
                            <img src="assets/images/shop/product-details-img-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="product-details__top">
                            <h3 className="product-details__title">Comfy chair <span>$46.00</span> </h3>
                        </div>
                        <div className="product-details__reveiw">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>2 customer reviews</span>
                        </div>
                        <div className="product-details__content">
                            <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam
                                aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit
                                convallis dignissim onec vel pellentesque neque.</p>
                            <p className="product-details__content-text2">REF. 4231/406 <br/>
                                Available in store</p>
                        </div>

                        <div className="product-details__quantity">
                            <h3 className="product-details__quantity-title">Quantity</h3>
                            <div className="quantity-box">
                                <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                <input type="number" id="1" />
                                <button type="button" className="add"><i className="fa fa-plus"></i></button>
                            </div>
                        </div>


                        <div className="product-details__buttons">
                            <div className="product-details__buttons-1">
                                <Link href="product-details" className="thm-btn">Add to Wishlist</Link>
                            </div>

                            <div className="product-details__buttons-2">
                                <Link href="cart" className="thm-btn">Add to Cart</Link>
                            </div>
                        </div>
                        <div className="product-details__social">
                            <div className="title">
                                <h3>Share with friends</h3>
                            </div>
                            <div className="product-details__social-link">
                                <Link href="#"><span className="fab fa-twitter"></span></Link>
                                <Link href="#"><span className="fab fa-facebook"></span></Link>
                                <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                <Link href="#"><span className="fab fa-instagram"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Product Details End*/}

        {/*Product Description Start*/}
        <section className="product-description">
            <div className="container">
                <h3 className="product-description__title">Description</h3>
                <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                    phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have
                    alteration in some injected or words which don't look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the
                    middle of text.</p>
                <div className="product-description__list">
                    <ul className="list-unstyled">
                        <li>
                            <p><span className="icon-right-arrow"></span> Nam at elit nec neque suscipit gravida.</p>
                        </li>
                        <li>
                            <p><span className="icon-right-arrow"></span> Aenean egestas orci eu maximus tincidunt.</p>
                        </li>
                        <li>
                            <p><span className="icon-right-arrow"></span> Curabitur vel turpis id tellus cursus laoreet.
                            </p>
                        </li>
                    </ul>
                </div>
                <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                    dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                    generate Lorem Ipsum which looks reasonable. </p>
            </div>
        </section>
        {/*Product Description End*/}

        {/*Review One Start*/}
        <section className="review-one">
            <div className="container">
                <div className="comments-area">
                    <div className="review-one__title">
                        <h3>2 reviews</h3>
                    </div>
                    {/*Start Comment Box*/}
                    <div className="comment-box">
                        <div className="comment">
                            <div className="author-thumb">
                                <figure className="thumb"><img src="assets/images/shop/review-1-1.jpg" alt=""/>
                                </figure>
                            </div>

                            <div className="review-one__content">
                                <div className="review-one__content-top">
                                    <div className="info">
                                        <h2>Kevin martin <span>20 july 2023 . 4:00 pm</span></h2>
                                    </div>
                                    <div className="reply-btn">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>

                                <div className="review-one__content-bottom">
                                    <p>It has survived not only five centuries, but also the leap into electronic
                                        typesetting unchanged. It was popularised in the sheets containing lorem ipsum
                                        is simply free text. className aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non
                                        dignissim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Comment Box*/}

                    {/*Start Comment Box*/}
                    <div className="comment-box">
                        <div className="comment">
                            <div className="author-thumb">
                                <figure className="thumb"><img src="assets/images/shop/review-1-2.jpg" alt=""/>
                                </figure>
                            </div>

                            <div className="review-one__content">
                                <div className="review-one__content-top">
                                    <div className="info">
                                        <h2>Sarah albert <span>20 july 2023 . 4:00 pm</span></h2>
                                    </div>
                                    <div className="reply-btn">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>

                                <div className="review-one__content-bottom">
                                    <p>It has survived not only five centuries, but also the leap into electronic
                                        typesetting unchanged. It was popularised in the sheets containing lorem ipsum
                                        is simply free text. className aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non
                                        dignissim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Comment Box*/}
                </div>
            </div>
        </section>
        {/*Review One End*/}

        {/*Start Review Form*/}
        <section className="review-form-one">
            <div className="container">
                <div className="review-form-one__inner">
                    <h3 className="review-form-one__title">Add a review</h3>
                    <div className="review-form-one__rate-box">
                        <p className="review-form-one__rate-text">Rate this product?</p>
                        <div className="review-form-one__rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <form action="assets/inc/sendemail.php" className="review-form-one__form contact-form-validated"
                        >
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="review-form-one__input-box text-message-box">
                                    <textarea name="message" placeholder="Write comment"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="review-form-one__input-box">
                                    <input type="text" placeholder="Your name" name="name"/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="review-form-one__input-box">
                                    <input type="email" placeholder="Email address" name="email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <button type="submit" className="thm-btn review-form-one__btn">Submit comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/*End Review Form*/}

            </Layout>
        </>
    )
}