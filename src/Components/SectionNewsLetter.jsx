import '../style/SectionNewsLetter.css'
function SectionNewsLetter() {
  return (
    <>
    <section className="newsletter__area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="newsletter_image-wrap">
                        <img src="/src/assets/img/newsletter_img.png" alt="" />
                        <img src="/src/assets/img/newsletter_shape01.png" className='shape-one aos-init aos-animate' alt="newslatter-shape" data-aos="fade-up" data-aos-delay="400" />
                        <img src="/src/assets/img/newsletter_shape02.png" alt="" className='alltuchtopdown' />
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="newsletter_content">
                        <h2 className="title">
                            Want to say <span>Informed</span> About <br />
                            new <span>course & study ?</span>
                        </h2>
                        <div className="news-letter-form">
                            <form>
                                <input type="email" placeholder='Type Your E-mail'/>
                                <button type='submit' className='btn'>Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="newsletter_shape">
            <img src="/src/assets/img/newsletter_shape03.png" alt="newslatter-shape03" className='aos-init aos-animate' data-aos="fade-left" data-aous-delay="400" />
        </div>
    </section>
    </>
  )
}

export default SectionNewsLetter