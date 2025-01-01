import '../style/InstructerItem.css'

function InstructerItem() {
    return (
        <>
            <div className="col-sm-6">
                <div className="instructer_item">
                    <div className="instructer_thumb">
                        <div className="thumb_background"></div>
                        <a href="">
                            <img src="/src/assets/img/instructor01.png" alt="" />
                        </a>
                    </div>
                    <div className="instructer_content">
                        <h2 className="title">
                            <a href="">
                                Mark Jukarberg
                            </a>
                        </h2>
                        <span className='designation'>UX Design Lead</span>
                        <p className='avg-rating'>
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            (4.8 Ratings)
                        </p>
                        <div className="instructer_social">
                            <ul className="list-wrap">
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstructerItem