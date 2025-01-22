import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
            <div className="page-header-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <p>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><span>//</span></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Page Header End*/}

        </>
    )
}
