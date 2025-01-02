import './instructor.css'
export const Instructor=()=> {
    const items = [
        {
            id: "1",
            title: "Mark Jukerberg",
            designation: "UX Design Lead",
            ratings: "4.8",
            imageUrl: "/src/assets/img/instructor01.png"
        },
        {
            id: "2",
            title: "Web Design",
            designation: "Olivia Mia",
            ratings: "4.8",
            imageUrl: "/src/assets/img/instructor02.png"
        },
        {
            id: "3",
            title: "William Hope",
            designation: "Digital Marketing",
            ratings: "4.8",
            imageUrl: "/src/assets/img/instructor03.png"
        },
        {
            id: "4",
            title: "Shophia Ava",
            designation: "Web Development",
            ratings: "4.8",
            imageUrl: "/src/assets/img/instructor04.png"
        }
    ]

    const socialLinks = ["facebook", "x", "whatsapp", "instagram"];
    const icons = ["facebook-f", "x-twitter", "whatsapp", "instagram"];
    return (
        <>
            <section className="instructer_area">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-xl-4">
                            <div className="instructer__content_wrap">
                                <div className="section_title mb-15">
                                    <span className="sub-title">
                                        Skilled introduce
                                    </span>
                                    <h2 className="title">
                                        Our Top Class & Expert Instructors in One Place
                                    </h2>
                                </div>
                                <p>
                                    when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries
                                </p>
                                <div className="tg-button-wrap">
                                    <a className="btn arrow-btn">
                                        See All instructors
                                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-inject-url="http://127.0.0.1:5500/skillgro-html/assets/img/icons/right_arrow.svg" className="injectable ms-2"><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="instructer_item_wrap">
                                <div className="row">

                                    {
                                        items.map((item, index) => {
                                            return (
                                                <div key={index} className="col-sm-6">
                                                    <div className="instructer_item">
                                                        <div className="instructer_thumb">
                                                            <div className="thumb_background">
                                                            </div>
                                                            <a href="">
                                                                <img
                                                                    src={item.imageUrl}
                                                                    alt="abs" />
                                                            </a>
                                                        </div>
                                                        <div className="instructer_content">
                                                            <h2 className="title">
                                                                <a href="">
                                                                    {item.title}
                                                                </a>
                                                            </h2>
                                                            <span className='designation' >{item.designation}</span>
                                                            <p className='avg-rating'>
                                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                                ({item.ratings} Ratings)
                                                            </p>
                                                            <div className="instructer_social">
                                                                <ul className="list-wrap">
                                                                    {
                                                                        socialLinks.map((link, index) => {
                                                                            return (
                                                                                <li key={index}>
                                                                                    <a href={`https://www.${link}.com`}>
                                                                                        <i className={`fa-brands fa-${icons[index]}`}></i>
                                                                                    </a>
                                                                                </li>

                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
