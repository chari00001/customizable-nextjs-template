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
        {/*Blog Sidebar Start*/}
        <section className="blog-sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-sidebar__left">
                            <div className="blog-sidebar__img-box">
                                <div className="blog-sidebar__img">
                                    <img src="assets/images/blog/blog-sidebar-img-1.jpg" alt=""/>
                                </div>
                                <div className="blog-sidebar__video-link">
                                    <a  onClick={() => setOpen(true)} className="video-popup">
                                        <div className="blog-sidebar__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <p className="blog-sidebar__text-1">There are many variations of passages of Lorem Ipsum
                                available, but the majority have alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are going to use a
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat chunks
                                as necessary,</p>
                            <p className="blog-sidebar__text-2">It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution as opposed to using
                                'Content here, content here', making it look like readable English. Many desktop
                                publishing packages and web page editors</p>
                            <p className="blog-sidebar__text-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <h3 className="blog-sidebar__title blog-sidebar__title-1">Keep Your Battery Health 100%</h3>
                            <p className="blog-sidebar__text-4">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                dolores eos qui ratione voluptatem sequi nesciunt. </p>
                            <p className="blog-sidebar__text-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit</p>
                            <div className="blog-sidebar__quote">
                                <p className="blog-sidebar__quote-text">Which is the same as saying through shrinking from
                                    toil and pain. These cases are perfectly simple and easy to distinguish. In a free
                                    hour, when our power of choice is untrammelled</p>
                                <p className="blog-sidebar__quote-name">Markon Deo</p>
                            </div>
                            <p className="blog-sidebar__text-6">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt.</p>
                            <h3 className="blog-sidebar__title blog-sidebar__title-2">Choose The Right Case Guard</h3>
                            <p className="blog-sidebar__text-7">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the, printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, </p>
                            <p className="blog-sidebar__text-8">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto beatae vitae dicta sunt explicabo. </p>
                            <p className="blog-sidebar__text-9">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                            <div className="blog-sidebar__img-box-2">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img-1">
                                                <img src="assets/images/blog/blog-sidebar-img-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img-2">
                                                <img src="assets/images/blog/blog-sidebar-img-3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="block-details__pre-next-btn blog-sidebar__pre-next-btn">
                                <div className="block-details__pre-btn">
                                    <Link href="#"><span className="icon-double-chevron"></span>Previous</Link>
                                </div>
                                <div className="block-details__next-btn">
                                    <Link href="#">Next<span className="icon-double-chevron-1"></span></Link>
                                </div>
                            </div>
                            <div className="author blog-sidebar__author">
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
                                            <div className="comment-form__input-box blog-sidebar__input-box">
                                                <input type="text" placeholder="Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box blog-sidebar__input-box">
                                                <input type="email" placeholder="Email" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box blog-sidebar__input-box-textarea">
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
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here"/>
                                    <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li><Link href="#"><span className="icon-play-1"></span>Smartphone</Link>
                                    </li>
                                    <li><Link href="#"><span className="icon-play-1"></span>Laptop</Link>
                                    </li>
                                    <li><Link href="#"><span className="icon-play-1"></span>Insight</Link>
                                    </li>
                                    <li><Link href="#"><span className="icon-play-1"></span>Tablet</Link>
                                    </li>
                                    <li><Link href="#"><span className="icon-play-1"></span>Hardware</Link>
                                    </li>
                                    <li><Link href="#"><span className="icon-play-1"></span>MacOS</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest Posts</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">NFT Trading Volume
                                                    Hit The New Lows</Link>
                                            </h3>
                                            <p>Aug 10, 2023</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">Magnetism in Ancient
                                                    Crystals History</Link>
                                            </h3>
                                            <p>Aug 10, 2023</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">How to fix Broken
                                                    Screen On Your Phone</Link>
                                            </h3>
                                            <p>Aug 10, 2023</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__get-in-touch">
                                <h3 className="sidebar__title">Get in touch</h3>
                                <ul className="sidebar__get-in-touch-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-send"></span>
                                        </div>
                                        <div className="text">
                                            <h3>
                                                71890 Champlin Neck
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-mail"></span>
                                        </div>
                                        <div className="text">
                                            <h3><Link href="mailto:support@domain.com">support@domain.com</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                        <div className="text">
                                            <h3><Link href="tel:+62813221467">(+62) 81 322 1467</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-clock"></span>
                                        </div>
                                        <div className="text">
                                            <h3>
                                                09:00 AM - 22:00 PM
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <Link href="#">Laptop</Link>
                                    <Link href="#">Desktop</Link>
                                    <Link href="#">Tablet</Link>
                                    <Link href="#">Repair</Link>
                                    <Link href="#">Virus</Link>
                                    <Link href="#">Smaprphone</Link>
                                    <Link href="#">Gadget</Link>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__booking">
                                <div className="sidebar__booking-bg"
                                    style={{ backgroundImage: 'url(assets/images/blog/booking-bg-img.jpg)' }} ></div>
                                <div className="sidebar__booking-content">
                                    <h3 className="sidebar__booking-title">Computer Repair Service</h3>
                                    <div className="sidebar__booking-btn-box">
                                        <Link href="#" className="thm-btn sidebar__booking-btn">Book A Service</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Sidebar End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

            </Layout>
        </>
    )
}