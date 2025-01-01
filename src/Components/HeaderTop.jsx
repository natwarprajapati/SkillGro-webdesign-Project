
function HeaderTop() {
  return (
    <>
    <div className=" header_top">
        <div className="header_top-left ">
            <div className="header-location">
                <img src="/src/assets/img/map_marker.svg" alt="" />
                <span>589 5th Ave, NY 10024, USA</span>
            </div>
            <div className="header-email">
                <img src="/src/assets/img/envelope.svg" alt="" />
                    <a href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</a>
            </div>
        </div>
        <div className="header-top-right">
            <div className="header-call">
                <img src="/src/assets/img/phone.svg" alt="" />
                <span>Call us:</span>
                <a href="tel:0-123456789">+123 599 8989</a>           
            </div>
            <div className="header-follow-us">
                <span>Follow Us:</span>
                <a href="">
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a href="">
                    <i className='fab fa-twitter'></i>
                </a>
                <a href="">
                    <i className='fab fa-whatsapp'></i>
                </a>
                <a href="">
                    <i className='fab fa-linkedin-in'></i>
                </a>
                <a href="">
                    <i className='fab fa-youtube'></i>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderTop