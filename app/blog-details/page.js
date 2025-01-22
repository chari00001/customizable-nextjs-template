'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="How To Fix Broken Back Glass On Your Phone">
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="blog-details__content-top">
                            <p className="blog-details__text-1">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't look even slightly believable. If you are going to use a
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary,</p>
                            <p className="blog-details__text-2">It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                            <p className="blog-details__text-3">As opposed to using 'Content here, content here', making it
                                look like readable English. Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text,</p>
                            <h3 className="blog-details__title">Keep Your Battery Health 100%</h3>
                            <p className="blog-details__text-4">As opposed to using 'Content here, content here', making it
                                look like readable English. Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text,</p>
                            <div className="blog-details__qutoe">
                                <p className="blog-details__qutoe-text">Duis aute irure dolor in reprehenderit in voluptate
                                    velit on esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident,</p>
                                <p className="blog-details__qutoe-name">Markon Deo</p>
                            </div>
                            <p className="blog-details__text-5">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the, printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries,</p>
                        </div>
                        <div className="blog-details__img-box">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-1-1.jpg" alt=""/>
                            </div>
                            <div className="blog-details__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="blog-details__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="blog-details__bottom">
                            <h3 className="blog-details__title">Choose The Right Case Guard</h3>
                            <p className="blog-details__text-6">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the, printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries,</p>
                            <p className="blog-details__text-7">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p className="blog-details__text-8">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                            <p className="blog-details__tags">
                                <span>Tags:</span>
                                <Link href="#">Gadget Repair</Link>
                                <Link href="#">Smartphone</Link>
                            </p>
                            <div className="blog-details__social-list">
                                <span>Share This :</span>
                                <div className="blog-details__social">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="block-details__pre-next-btn">
                                <div className="block-details__pre-btn">
                                    <Link href="#"><span className="icon-double-chevron"></span>Previous</Link>
                                </div>
                                <div className="block-details__next-btn">
                                    <Link href="#">Next<span className="icon-double-chevron-1"></span></Link>
                                </div>
                            </div>
                            <div className="author">
                                <div className="author__img">
                                    <img src="assets/images/blog/author-img.jpg" alt=""/>
                                </div>
                                <div className="author__content">
                                    <div className="author__name">
                                        <h4>Hasnat Jion</h4>
                                        <p>About Author</p>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa</p>
                                    <div className="author__social">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__title">2 comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <p className="comment-one__date">Aug 10, 2023 at 11:29 am</p>
                                        <h3>Shinur Katun</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. </p>
                                        <Link href="#" className="thm-btn comment-one__btn">Reply<span
                                                className="icon-double-chevron-1"></span></Link>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <p className="comment-one__date">Aug 10, 2023 at 11:29 am</p>
                                        <h3>Michael Douglas</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. </p>
                                        <Link href="#" className="thm-btn comment-one__btn">Reply<span
                                                className="icon-double-chevron-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a comment</h3>
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated"
                                    >
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message"
                                                    placeholder="Write your comment here..."></textarea>
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="thm-btn comment-form__btn">Leave a
                                                    Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Details End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

            </Layout>
        </>
    )
}