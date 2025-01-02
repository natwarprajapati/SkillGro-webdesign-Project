import PropTypes from 'prop-types';
import './Categories.css'
import Slider from 'react-slick';


const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    centerPadding: "10px",
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },

        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },

        },]
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='categories-button-next'
            onClick = {onClick} >
            <i className="fa-solid fa-arrow-right fa-lg" />
        </div>
    );
}
SampleNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="categories-button-prev"
            onClick={onClick}
        >
            <i className="fa-solid fa-arrow-left fa-lg" />
        </div>
    );
}
SamplePrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired
}

const categoreisData = [{
    id: 1,
    iClassName: "fa-regular fa-envelope",
    categoryName: "Marketing",
    courseQuntity: 31,
},
{
    id: 2,
    iClassName: "fa-solid fa-bag-shopping fa-sm",
    categoryName: "Life style",
    courseQuntity: 23,
}, {
    id: 3,
    iClassName: "fa-solid fa-handshake fa-sm",
    categoryName: "Management",
    courseQuntity: 19,
},
{
    id: 4,
    iClassName: "fa-solid fa-brush fa-sm",
    categoryName: "App Design",
    courseQuntity: 18,
},
{
    id: 5,
    iClassName: "fa-solid fa-bezier-curve  fa-sm",
    categoryName: "Graphic Design",
    courseQuntity: 22,
},
{
    id: 6,
    iClassName: "fa-solid fa-building fa-sm",
    categoryName: "Finance",
    courseQuntity: 41,
}, {
    id: 7,
    iClassName: "fa-solid fa-code fa-sm",
    categoryName: "Development",
    courseQuntity: 29,
}
]

export const Categories = () => {
    return (
        <section className="categories_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-7">
                        <div className="section_title text-center mb-4">
                            <span className="sub-title">
                                Trending Categories
                            </span>
                            <h2 className="title">
                                Top Category we have
                            </h2>
                            <p>
                                when known printer took a galley of type scrambl edmake
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="categories_wrap">
                            <Slider {...settings}>
                                {
                                    categoreisData.map((data, index) => {
                                        return (
                                            <div className="swipe" key={index}>
                                                <div className="swiper_slide">
                                                    <div className="categories_item">
                                                        <a href="">
                                                            <div className="icon">
                                                                <div className="cat-star">
                                                                    <img src="/src/assets/img/cat_star.svg" alt="" />
                                                                </div>
                                                                <i className={data.iClassName}></i>
                                                            </div>
                                                            <span className="name">
                                                                {data.categoryName}
                                                            </span>
                                                            <span className="courses">
                                                                (29)
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
