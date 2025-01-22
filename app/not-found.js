import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
            <Layout>
            
                {/*Error Page Start*/}
                <section className="error-page">
                    <div className="error-page__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/404-bg-img.jpg)' }} ></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__title-box">
                                        <h2 className="error-page__title">
                                            <span className="clr-primary">404</span>
                                        </h2>
                                    </div>
                                    <h3 className="error-page__tagline">Oops! Page Not Found!</h3>
                                    <p className="error-page__text">The page you are looking for does not exist. It might have been
                                        moved or deleted</p>
                                    <Link href="/" className="thm-btn error-page__btn">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Error Page End*/}

            </Layout>

        </>
    )
}
