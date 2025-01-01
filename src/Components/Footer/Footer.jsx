import '../Footer/Footer.css'
function Footer() {
    const useFulLinks = ["Our values",
        "Our advisory board",
        " Our partners",
        "Become a partner",
        "Work at Future Learn",
        "Quizlet Plus"];
    const companyLinks = ["Contact Us", " Become Teacher", "Blog", "Insturctor", "Events"];
    const websitesData = ["facebook", "x", "whatsapp", "instagram", "youtube"];
    const iconData = ["facebook-f", "x-twitter", "whatsapp", "instagram", "youtube"];

    return (
        <footer className='footer_area'>
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer_widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/src/assets/img/secondary_logo.svg" alt="" />
                                    </a>
                                </div>
                                <div className="footer_content">
                                    <p>
                                        when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.
                                    </p>
                                    <ul className="list-wrap">
                                        <li>
                                            463 7th Ave, NY 10018, USA
                                        </li>
                                        <li>+123 88 9900 456</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer_widget">
                                <h4 className="footer_widget-title">
                                    Useful Links
                                </h4>
                                <div className="footer_link">
                                    <ul className="list-wrap">
                                        {
                                            useFulLinks.map((link, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href="">
                                                            {link}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer_widget">
                                <h4 className="footer_widget-title">
                                    Our Company
                                </h4>
                                <div className="footer_link">
                                    <ul className="list-wrap">
                                        {
                                            companyLinks.map((link, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href="">
                                                            {link}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer_widget">
                                <h4 className="footer_widget-title">
                                    Get in Touch
                                </h4>
                                <div className="footer_contact-content">
                                    <p>
                                        when an unknown printer took <br />
                                        galley type and scrambled
                                    </p>
                                    <ul className="list-wrap footer_social">
                                        {
                                            websitesData.map((data, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href={`https://www.${data}.com`}>
                                                            <i className={`fa-brands fa-${iconData[index]}`} />
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="application_content">
                                    <a href="/">
                                        <img src="/src/assets/img/google-play.svg" alt="" />
                                    </a>
                                    <a href="/">
                                        <img src="/src/assets/img/apple-store.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copy_right-text">
                                <p>
                                    © 2010-2024 skillgro.com. All rights reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer_bottom-menu">
                                <ul className="list-wrap">
                                    <li>
                                        <a href="">
                                            Term of Use
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer