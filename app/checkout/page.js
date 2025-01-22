import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={4} breadcrumbTitle="Checkout">
        {/*Start Checkout Page*/}
        <section className="checkout-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details">
                            <div className="billing_title">
                                <p>Returning Customer? <span>Click here to Login</span></p>
                                <h2>Billing details</h2>
                            </div>
                            <form className="billing_details_form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select a country">Select a country</option>
                                                    <option value="1">Canada</option>
                                                    <option value="2">England</option>
                                                    <option value="3">Australia</option>
                                                    <option value="3">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" placeholder="First name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" placeholder="Last name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" placeholder="Company"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Address" placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name"
                                                placeholder="Appartment, unit, etc. (optional)"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Town/City" placeholder="Town / City"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="State" placeholder="State"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                 placeholder="Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper1" id="skipper"/>
                                            <label><span></span>Create an account?</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="col-xl-6 col-lg-6">
                        <div className="billing_details ship_different_address">
                            <div className="billing_title ship_different_address_title">
                                <h2>Ship to a different address <span className="fa fa-check-circle"></span></h2>
                            </div>
                            <form className="billing_details_form ship_different_address_form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select a country">Select a country</option>
                                                    <option value="1">Canada</option>
                                                    <option value="2">England</option>
                                                    <option value="3">Australia</option>
                                                    <option value="3">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="first_name" placeholder="First name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="last_name" placeholder="Last name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name" placeholder="Company"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Address" placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="company_name"
                                                placeholder="Appartment, unit, etc. (optional)"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="billing_input_box">
                                            <input type="text" name="Town/City" placeholder="Town / City"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="text" name="State" placeholder="State" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input name="email" type="email" placeholder="Email address"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="billing_input_box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                 placeholder="Phone"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="ship_different_input">
                                            <textarea placeholder="Notes about order"
                                                name="form_order_notes"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="your_order">
                    <h2>Your order</h2>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="order_table_box">
                                <table className="order_table_detail">
                                    <thead className="order_table_head">
                                        <tr>
                                            <th>Product</th>
                                            <th className="right">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro__title">Product Name</td>
                                            <td className="pro__price">$10.99 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Subtotal</td>
                                            <td className="pro__price">$10.99 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Shipping</td>
                                            <td className="pro__price">$0.00 USD</td>
                                        </tr>
                                        <tr>
                                            <td className="pro__title">Total</td>
                                            <td className="pro__price">$20.98 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="checkout__payment">
                                <div className="checkout__payment__item checkout__payment__item--active">
                                    <h3 className="checkout__payment__title">Direct bank transfer</h3>
                                    <div className="checkout__payment__content">
                                        Make your payment directly into our bank account. Please
                                        use your Order ID as the payment reference. Your order
                                        wont be shipped until the funds have cleared.
                                    </div>{/* /.checkout__payment__content */}
                                </div>{/* /.checkout__payment__item */}
                                <div className="checkout__payment__item">
                                    <h3 className="checkout__payment__title">Paypal payment <img
                                            src="assets/images/shop/paypal-1.jpg" alt=""/></h3>
                                    <div className="checkout__payment__content">
                                        Make your payment directly into our bank account. Please
                                        use your Order ID as the payment reference. Your order
                                        wont be shipped until the funds have cleared.
                                    </div>{/* /.checkout__payment__content */}
                                </div>{/* /.checkout__payment__item */}
                            </div>{/* /.checkout__payment */}
                            <div className="text-right d-flex justify-content-end">
                                <Link href="checkout" className="thm-btn">Place your order</Link>
                            </div>{/* /.text-right */}

                        </div>{/* /.col-lg-6 */}
                    </div>
                </div>
            </div>
        </section>
        {/*End Checkout Page*/}

            </Layout>
        </>
    )
}