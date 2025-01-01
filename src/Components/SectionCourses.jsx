// import React from 'react'
import PropTypes from 'prop-types';
import Slider from "react-slick"
import '../style/SectionCourses.css'

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    centerPadding: "10px",
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {

            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
            
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='courses_next-button course-button'
            onClick={onClick} >
            <i className="fa-solid fa-arrow-right fa-lg" />
        </div>
    );
}
SampleNextArrow.propTypes = {
    onClick: PropTypes.string.isRequired
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="courses_prev-button courses-button"
            onClick={onClick}
        >
            <i className="fa-solid fa-arrow-left fa-lg" />
        </div>
    );
};

SamplePrevArrow.propTypes = {
    onClick: PropTypes.string.isRequired
}
const courses = ['All Courses', 'Design', 'Business', 'Development', 'Marketing'];
const coursesData = [
    {
        id: 1,
        courseName: "Development",
        courseTitle: "Learning JavaScript With Imagination",
        price: 15.00,
        imageUrl: "/src/assets/img/course_thumb01.jpg"

    },
    {
        id: 2,
        courseName: "Design",
        courseTitle: "The Complete Graphic Design For Beginners",
        price: 19.00,
        imageUrl: "/src/assets/img/course_thumb02.jpg"

    },
    {
        id: 3,
        courseName: "Marketing",
        courseTitle: "Learning Digital Marketing on Facebook",
        price: 24.00,
        imageUrl: "/src/assets/img/course_thumb03.jpg"

    },
    {
        id: 4,
        courseName: "Business",
        courseTitle: "Financial Analytics Training & Investing Course",
        price: 12.00,
        imageUrl: "/src/assets/img/course_thumb04.jpg"

    },
    {
        id: 5,
        courseName: "Data Science",
        courseTitle: "Data Analysis & Visualition Masterclass",
        price: 27.00,
        imageUrl: "/src/assets/img/course_thumb05.jpg"

    },
    {
        id: 6,
        courseName: "Mathematic",
        courseTitle: " Master the Fundamentals of Math",
        price: 10.00,
        imageUrl: "/src/assets/img/course_thumb06.jpg"

    },
    {
        id: 7,
        courseName: "Business",
        courseTitle: "Financial Analytics Training & Investing Course",
        price: 12.00,
        imageUrl: "/src/assets/img/course_thumb04.jpg"

    },

]
function SectionCourses() {
    return (
        <section className='courses_area' style={{ position: "relative" }}>
            <div className="container">
                <div className="section_title-wrap">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-4">
                                <span className="sub-title">
                                    Top Class Courses
                                </span>
                                <h2 className="title">
                                    Explore Our World’s Best courses
                                </h2>
                                <p className='desc' style={{ marginTop: "10px" }}>
                                    When known printer took a galley of type scrambl edmake
                                </p>
                            </div>
                            <div className="courses_nav">
                                <ul className="nav nav-tabs">
                                    {courses.map((course, index) => (
                                        <li key={index} className="nav-item">
                                            <button className='nav-link'>{course}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        coursesData.map((data, index) => {
                            return (
                                <div key={index} className="course_item-content">
                                    <div className="courses_item">
                                        <div className="courses_item-thumb">
                                            <a href="">
                                                <img src={data.imageUrl} alt="" />
                                            </a>
                                        </div>
                                        <div className="courses_item-content">
                                            <ul className="courses_item-meta">
                                                <li className="courses_item-tag">
                                                    <a href="">Mathemetics</a>
                                                </li>
                                                <li className='avg-rating'>
                                                    <i className="fa-solid fa-star" />
                                                    ( 4.7 reviews )
                                                </li>
                                            </ul>
                                            <h5 className='title'>
                                                <a href="">
                                                    {data.courseTitle}
                                                </a>
                                            </h5>
                                            <p className='author'>
                                                By <a href="">David Miller</a>
                                            </p>
                                            <div className="courses_item-bottom">
                                                <div className="buton">
                                                    <a href="">
                                                        <span className="text">
                                                            Enroll Now
                                                            <i className="fa-solid fa-arrow-right ms-2" />
                                                        </span>
                                                    </a>
                                                </div>
                                                <h5 className="price">
                                                    ${data.price}.00
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default SectionCourses