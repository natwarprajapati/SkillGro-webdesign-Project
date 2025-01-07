import './banner.css'
export const Banner = ()=>{

    return(
        <section className='banner-area' >
                <div className="banner-container container">
                    <div className="row">
                        <div className=" col-lg-6">
                            <div className="banner_content" >
                                <h3 className="title animate__animated animate__fadeInLeft">
                                    Never Stop
                                    <span className='learning-container'>
                                        <span className="learning-svg-icon">
                                            <svg width="100%" height="100%" viewBox="0 0 61 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: '32, 34' }} />
                                                <path d="M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: '32, 34' }} />
                                                <path d="M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: '21, 23' }} />
                                            </svg>
                                        </span>
                                        <span className='learning-icon' style={{display:"inline-block"}}>
                                            <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor"></path></svg>
                                            Learning
                                        </span>
                                    </span>


                                    <br />
                                    Life <b>Never Stop</b> Teaching
                                </h3>
                                <p className="aos-init aos-animate" data-aos="fade-right" data-aos-delay="600">
                                    Every teaching and learning journey is unique Following We’ll help guide your way.
                                </p>

                                <div className="btn-wrap aos-init aos-animate" data-aos="fade-right" data-aos-delay="800">
                                    <a href="" className='arrow-btn button'>
                                        start free trial
                                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-inject-url="http://127.0.0.1:5500/skillgro-html/assets/img/icons/right_arrow.svg" className="injectable"><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className=" col-lg-6">
                            <div className="banner_images">
                                <img src="/src/assets/img/banner_img.png" className='main-img' alt="" />
                                <div className="shape big-shape aos-init aos-animate" data-aos="fade-up-right" data-aos-delay="600" >
                                    <img src="/src/assets/img/banner_shape01.png" className='banner-shape-one' alt="" />
                                </div>
                                <img src="/src/assets/img/bg_dots.svg" className='shape bg-dots' alt="" />
                                <img src="/src/assets/img/banner_shape02.png" alt="" className='shape small-shape' />
                                <div className="banner_author">
                                    <div className="banner_author-item">
                                        <div className="image">
                                            <img src="/src/assets/img/banner_author01.png" alt="" />
                                        </div>
                                        <h6 className='name'>Robert Fox</h6>
                                    </div>
                                    <div className="banner_author-item">
                                        <div className="image">
                                            <img src="/src/assets/img/banner_author02.png" alt="" />
                                        </div>
                                        <h6 className='name'>Michel Jones</h6>
                                    </div>
                                    <img src="/src/assets/img/banner_shape02.svg" alt="shape" className='arrow-shape' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/src/assets/img/banner_shape01.svg" alt="banner_shape" className='line-shape aos-init aos-animate' data-aos="fade-right" data-aos-delay="1600" />
            </section>
    )
}