import { useEffect, useRef, useState } from 'react'
import { HeaderTop } from '../HeaderTop'
import { TopBar } from '../TopBar'
import './header.css'

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [selected, setSelected] = useState("Categories");

    const handleSelect = (selectList) => {
        setIsOpen(false);
        setSelected(selectList);
    }

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {

        if (window.scrollY > 150) {
            setIsFixed(true)
        } else (
            setIsFixed(false)
        )
    }

    const dropDownRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    useEffect(() => {

        const handleClickOutSide = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsOpen(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    })


    const [clsname, setClsName] = useState(null);
    const [subClsname, setSubClsname] = useState(null)

    const toggleClass = (div) => {
        setClsName(clsname === div ? null : div)
        setSubClsname(null);
    }
    const toggleSubClass = (div) => {
        setSubClsname(subClsname === div ? null : div)
    }

    return (
        <header >
            <TopBar />
            <HeaderTop />
            <div className={`tg_header__area ${isFixed ? "fixed" : ""}`} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="tgmenu__wrap">
                                <div className="tgmenu__nav">
                                    <div className="logo">
                                        <a href="/">
                                            <img src="/src/assets/img/logo.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="tgmenu_navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                        <ul className="navigation">
                                            <li className="menu-item-has-children">
                                                <a href="/">Home
                                                    <i className="fa-solid fa-chevron-down fa-xs ms-2"></i>
                                                </a>
                                                <ul className="sub-menu mega-menu">
                                                    <li>
                                                        <ul className="list-wrap mega-sub-menu">
                                                            <li>
                                                                <a href="">
                                                                    Main Menu
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Online Course
                                                                    <span className="tg-badge">
                                                                        Hot
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    University
                                                                    <span className="tg-badge-two">
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Yoga Instructor
                                                                    <span className="tg-badge-two">
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Kindergarten
                                                                    <span className="tg-badge">
                                                                        Hot
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul className="list-wrap mega-sub-menu">
                                                            <li>
                                                                <a href="">
                                                                    Language Academy
                                                                    <span className='tg-badge-two'>
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Business Coach
                                                                    <span className='tg-badge-two'>
                                                                        New
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Kitchen Coach
                                                                    <span className='tg-badge'>
                                                                        Hot
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="mega-menu-img">
                                                            <a href="">
                                                                <img src="/src/assets/img/mega_menu_img.jpg" alt="" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/">Courses
                                                    <i className="fa-solid fa-chevron-down fa-xs ms-2"></i>
                                                </a>
                                                <ul className="sub-menu undefined">
                                                    <li className="menu-item-has-children ">
                                                        <a href="" >All Courses
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children ">
                                                        <a href="">
                                                            Course Details
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Course Lesson
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/">Pages
                                                    <i className="fa-solid fa-chevron-down fa-xs ms-2"></i>
                                                </a>
                                                <ul className="sub-menu undefined">
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            About Us
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Our Instructors
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="">Our Instructors</a>
                                                            </li>
                                                            <li>
                                                                <a href="">Instructor Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Our Events
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="">
                                                                    Our Events
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="">
                                                                    Events Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Shop
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                        <ul className="sub-menu" >
                                                            <li><a href="" >Shop</a></li>
                                                            <li><a href="">Shop Details</a></li>
                                                            <li><a href="">WishList</a></li>
                                                            <li><a href="">Cart Page</a></li>
                                                            <li><a href="">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Blog
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                        <ul className="sub-menu">
                                                            <li><a href="">Blog Right Sidebar</a></li>
                                                            <li><a href="">Blog Left Sidebar</a></li>
                                                            <li><a href="">Blog Full Width</a></li>
                                                            <li><a href="">Blog Detais</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Student Login
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Student Registration
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            404 Page
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Contact
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="/">Dashboard
                                                    <i className="fa-solid fa-chevron-down fa-xs ms-2"></i>
                                                </a>
                                                <ul className="sub-menu undefined">
                                                    <li className="menu-item-has-children " >
                                                        <a href="" className='me-0 pe-0'>
                                                            Instructor dashboard
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3 "></i>
                                                        <ul className="sub-menu">
                                                            <li><a href="">Dashboard</a></li>
                                                            <li><a href="">Profile</a></li>
                                                            <li><a href="">Enrolled Course</a></li>
                                                            <li><a href="">Wishlist</a></li>
                                                            <li><a href="">Reviews</a></li>
                                                            <li><a href="">My Quiz Attemps</a></li>
                                                            <li><a href="">Order History</a></li>
                                                            <li><a href="">My Course</a></li>
                                                            <li><a href="">Announcements</a></li>
                                                            <li><a href="">Quiz Attemps</a></li>
                                                            <li><a href="">Assignments</a></li>
                                                            <li><a href="">Settings</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="">
                                                            Student Dashboard
                                                        </a>
                                                        <i className="fa-solid fa-chevron-down fa-xs me-3"></i>
                                                        <ul className="sub-menu">
                                                            <li><a href="">Dashboard</a></li>
                                                            <li><a href="">Profile</a></li>
                                                            <li><a href="">Enrolled Courses</a></li>
                                                            <li><a href="">Wishlist</a></li>
                                                            <li><a href="">Reviews</a></li>
                                                            <li><a href="">My Quiz Compitition</a></li>
                                                            <li><a href="">Order History</a></li>
                                                            <li><a href="">Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-login-btn d-md-none d-block">
                                        <a href="">
                                            <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="injectable injectable">
                                                <path d="M9.5 11C12.434 11 14.8125 8.76142 14.8125 6C14.8125 3.23858 12.434 1 9.5 1C6.56599 1 4.1875 3.23858 4.1875 6C4.1875 8.76142 6.56599 11 9.5 11ZM9.5 11C11.7543 11 13.9163 11.8429 15.5104 13.3431C17.1045 14.8434 18 16.8783 18 19M9.5 11C7.24566 11 5.08365 11.8429 3.48959 13.3431C1.89553 14.8434 1 16.8783 1 19" stroke="currentcolor" strokeWidth="1.4625" strokeLinecap="round" strokeLinejoin="round" />
                                                <svg width="100%" height="100%" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 11C12.434 11 14.8125 8.76142 14.8125 6C14.8125 3.23858 12.434 1 9.5 1C6.56599 1 4.1875 3.23858 4.1875 6C4.1875 8.76142 6.56599 11 9.5 11ZM9.5 11C11.7543 11 13.9163 11.8429 15.5104 13.3431C17.1045 14.8434 18 16.8783 18 19M9.5 11C7.24566 11 5.08365 11.8429 3.48959 13.3431C1.89553 14.8434 1 16.8783 1 19" stroke="currentcolor" strokeWidth="1.4625" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: '59, 61', strokeDashoffset: 0 }} />
                                                </svg></svg>
                                        </a>
                                    </div>
                                    <div className="tgmenu__search d-none d-md-block">
                                        <form action="" className="tgmenu__search-form">
                                            <div className="select-grp">
                                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z" fill="currentcolor" /></svg>

                                                <div className="categories-container" >
                                                    <div className="categories-dropdown" ref={dropDownRef} >
                                                        <div onClick={() => setIsOpen(isOpen === true ? false : true)} className="categories_dropdrown_placeholder">
                                                            {selected}
                                                        </div>
                                                        <ul className={`${isOpen === true ? "show" : ""}`} >
                                                            <li onClick={() => handleSelect("Business")} className={`${selected === "Business" ? "selected" : ""}`}>
                                                                Business
                                                            </li>
                                                            <li onClick={() => handleSelect("Data Science")} className={`${selected === "Data Science" ? "selected" : ""}`}>
                                                                Data Science
                                                            </li>
                                                            <li onClick={() => handleSelect("Art & Design")} className={`${selected === "Art & Design" ? "selected" : ""}`}>
                                                                Art & Design
                                                            </li>
                                                            <li onClick={() => handleSelect("Marketing")}  className={`${selected === "Marketing" ? "selected" : ""}`}>
                                                                Marketing
                                                            </li>
                                                            <li onClick={() => handleSelect("Finance")}  className={`${selected === "Finance" ? "selected" : ""}`}>
                                                                Finance
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-grp">
                                                <input type="text" name="" id="" placeholder='Search For Course...' />
                                                <button type='submit'>
                                                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                                                </button>
                                            </div>
                                            {/* </div> */}
                                        </form>
                                    </div>

                                    <div className="action-menu-group d-none d-md-block">
                                        <ul className="list-wrap">
                                            <li className='wishlist-icon'>
                                                <a href="#" className='cart-count'>
                                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="injectable injectable">
                                                        <path d="M10.7554 4.61133L9.79142 3.62048C7.52872 1.2946 3.37978 2.09723 1.88208 5.02139C1.17893 6.39675 1.02029 8.38249 2.30423 10.9168C3.54111 13.3569 6.11437 16.2797 10.7554 19.4634C15.3964 16.2797 17.9683 13.3569 19.2065 10.9168C20.4905 8.38115 20.3332 6.39675 19.6287 5.02139C18.131 2.09723 13.982 1.29326 11.7193 3.61914L10.7554 4.61133ZM10.7554 21.0834C-9.85892 7.46155 4.40828 -3.17028 10.5188 2.45351C10.5994 2.52745 10.6787 2.60409 10.7554 2.68341C10.8312 2.60416 10.9102 2.52791 10.992 2.45485C17.1011 -3.17297 31.3697 7.4602 10.7554 21.0834Z" fill="currentcolor" />
                                                        <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.7554 4.61133L9.79142 3.62048C7.52872 1.2946 3.37978 2.09723 1.88208 5.02139C1.17893 6.39675 1.02029 8.38249 2.30423 10.9168C3.54111 13.3569 6.11437 16.2797 10.7554 19.4634C15.3964 16.2797 17.9683 13.3569 19.2065 10.9168C20.4905 8.38115 20.3332 6.39675 19.6287 5.02139C18.131 2.09723 13.982 1.29326 11.7193 3.61914L10.7554 4.61133ZM10.7554 21.0834C-9.85892 7.46155 4.40828 -3.17028 10.5188 2.45351C10.5994 2.52745 10.6787 2.60409 10.7554 2.68341C10.8312 2.60416 10.9102 2.52791 10.992 2.45485C17.1011 -3.17297 31.3697 7.4602 10.7554 21.0834Z" fill="currentcolor" style={{ strokeDasharray: '124, 126', strokeDashoffset: 0 }} />
                                                        </svg></svg>
                                                    <span className="wishlist-count">
                                                        0
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="minicart-icon">
                                                <a href="" className='cart-count'>
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="injectable injectable">
                                                        <path d="M19.4853 6.2598C19.2241 5.93213 18.8323 5.74415 18.4102 5.74415H14.6011L12.5355 1.01447C12.4075 0.721229 12.0659 0.587219 11.7726 0.715357C11.4793 0.843418 11.3454 1.18503 11.4735 1.47831L13.3365 5.74419H6.44249L8.30546 1.47831C8.43352 1.18503 8.29963 0.843457 8.00634 0.715357C7.7131 0.587219 7.37148 0.721152 7.24342 1.01447L5.17787 5.74419H1.36873C0.946649 5.74419 0.554817 5.93213 0.293635 6.25984C0.0372424 6.58155 -0.0573642 6.99513 0.0340748 7.39465L2.06825 16.2797C2.2103 16.9001 2.75913 17.3334 3.40291 17.3334H16.376C17.0198 17.3334 17.5686 16.9001 17.7107 16.2797L19.7449 7.39461C19.8363 6.99509 19.7417 6.58151 19.4853 6.2598ZM16.376 16.1745H3.40291C3.30452 16.1745 3.21833 16.1099 3.19797 16.021L1.16379 7.13602C1.14784 7.06629 1.17461 7.01383 1.19995 6.98211C1.22344 6.9526 1.27663 6.90311 1.36873 6.90311H4.67177L4.51999 7.25068C4.39193 7.54396 4.52583 7.88553 4.81911 8.01363C4.8946 8.04662 4.97325 8.06223 5.0507 8.06223C5.27406 8.06223 5.48692 7.93231 5.58203 7.71455L5.93639 6.90319H13.8426L14.197 7.71455C14.2921 7.93235 14.505 8.06223 14.7283 8.06223C14.8057 8.06223 14.8844 8.04662 14.9599 8.01363C15.2532 7.88557 15.3871 7.54396 15.259 7.25068L15.1073 6.90311H18.4103C18.5024 6.90311 18.5556 6.9526 18.5791 6.98211C18.6044 7.01387 18.6312 7.06633 18.6152 7.13598L16.5811 16.0211C16.5607 16.1099 16.4744 16.1745 16.376 16.1745Z" fill="currentcolor" />
                                                        <path d="M6.41271 9.41407C6.09269 9.41407 5.83324 9.67352 5.83324 9.99354V14.2429C5.83324 14.5629 6.09269 14.8224 6.41271 14.8224C6.73272 14.8224 6.99217 14.5629 6.99217 14.2429V9.99354C6.99217 9.67352 6.73276 9.41407 6.41271 9.41407Z" fill="currentcolor" />
                                                        <path d="M9.88947 9.41407C9.56946 9.41407 9.31001 9.67352 9.31001 9.99354V14.2429C9.31001 14.5629 9.56946 14.8224 9.88947 14.8224C10.2095 14.8224 10.4689 14.5629 10.4689 14.2429V9.99354C10.4689 9.67352 10.2095 9.41407 9.88947 9.41407Z" fill="currentcolor" />
                                                        <path d="M13.3662 9.41407C13.0462 9.41407 12.7868 9.67352 12.7868 9.99354V14.2429C12.7868 14.5629 13.0462 14.8224 13.3662 14.8224C13.6863 14.8224 13.9457 14.5629 13.9457 14.2429V9.99354C13.9457 9.67352 13.6863 9.41407 13.3662 9.41407Z" fill="currentcolor" />
                                                        <svg width="100%" height="100%" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.4853 6.2598C19.2241 5.93213 18.8323 5.74415 18.4102 5.74415H14.6011L12.5355 1.01447C12.4075 0.721229 12.0659 0.587219 11.7726 0.715357C11.4793 0.843418 11.3454 1.18503 11.4735 1.47831L13.3365 5.74419H6.44249L8.30546 1.47831C8.43352 1.18503 8.29963 0.843457 8.00634 0.715357C7.7131 0.587219 7.37148 0.721152 7.24342 1.01447L5.17787 5.74419H1.36873C0.946649 5.74419 0.554817 5.93213 0.293635 6.25984C0.0372424 6.58155 -0.0573642 6.99513 0.0340748 7.39465L2.06825 16.2797C2.2103 16.9001 2.75913 17.3334 3.40291 17.3334H16.376C17.0198 17.3334 17.5686 16.9001 17.7107 16.2797L19.7449 7.39461C19.8363 6.99509 19.7417 6.58151 19.4853 6.2598ZM16.376 16.1745H3.40291C3.30452 16.1745 3.21833 16.1099 3.19797 16.021L1.16379 7.13602C1.14784 7.06629 1.17461 7.01383 1.19995 6.98211C1.22344 6.9526 1.27663 6.90311 1.36873 6.90311H4.67177L4.51999 7.25068C4.39193 7.54396 4.52583 7.88553 4.81911 8.01363C4.8946 8.04662 4.97325 8.06223 5.0507 8.06223C5.27406 8.06223 5.48692 7.93231 5.58203 7.71455L5.93639 6.90319H13.8426L14.197 7.71455C14.2921 7.93235 14.505 8.06223 14.7283 8.06223C14.8057 8.06223 14.8844 8.04662 14.9599 8.01363C15.2532 7.88557 15.3871 7.54396 15.259 7.25068L15.1073 6.90311H18.4103C18.5024 6.90311 18.5556 6.9526 18.5791 6.98211C18.6044 7.01387 18.6312 7.06633 18.6152 7.13598L16.5811 16.0211C16.5607 16.1099 16.4744 16.1745 16.376 16.1745Z" fill="currentcolor" style={{ strokeDasharray: '131, 133', strokeDashoffset: 0 }} />
                                                            <path d="M6.41271 9.41407C6.09269 9.41407 5.83324 9.67352 5.83324 9.99354V14.2429C5.83324 14.5629 6.09269 14.8224 6.41271 14.8224C6.73272 14.8224 6.99217 14.5629 6.99217 14.2429V9.99354C6.99217 9.67352 6.73276 9.41407 6.41271 9.41407Z" fill="currentcolor" style={{ strokeDasharray: '13, 15', strokeDashoffset: 0 }} />
                                                            <path d="M9.88947 9.41407C9.56946 9.41407 9.31001 9.67352 9.31001 9.99354V14.2429C9.31001 14.5629 9.56946 14.8224 9.88947 14.8224C10.2095 14.8224 10.4689 14.5629 10.4689 14.2429V9.99354C10.4689 9.67352 10.2095 9.41407 9.88947 9.41407Z" fill="currentcolor" style={{ strokeDasharray: '13, 15', strokeDashoffset: 0 }} />
                                                            <path d="M13.3662 9.41407C13.0462 9.41407 12.7868 9.67352 12.7868 9.99354V14.2429C12.7868 14.5629 13.0462 14.8224 13.3662 14.8224C13.6863 14.8224 13.9457 14.5629 13.9457 14.2429V9.99354C13.9457 9.67352 13.6863 9.41407 13.3662 9.41407Z" fill="currentcolor" style={{ strokeDasharray: '13, 15', strokeDashoffset: 0 }} />
                                                        </svg></svg>
                                                    <span className="mini-cart-count">0</span>
                                                </a>
                                            </li>
                                            <li className="login-btn">
                                                <a href="#" className='login-btn-link'>Log in</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn mobile_nav-menu d-block d-xl-none no-outline" style={{ outline: "none" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <img src="/src/assets/img/menu.png" alt="" />
                                    </button>
                                    <div className="offcanvas offcanvas-end " tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div className="offcanvas-header">
                                            <img src="/src/assets/img/logo.svg" className='mt-3 ms-2' alt="" />
                                            {/* <h5 id="offcanvasRightLabel">Offcanvas right</h5> */}

                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                                        </div>
                                        <div className="offcanvas-body ">
                                            <div className="tgmobile_search">
                                                <form >
                                                    <input type="text" placeholder='Search Here...' />
                                                    <button>
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="tgmenu_navbar-wrap tgmobile_menu tgmenu__main-menu d-xl-none d-block">
                                                <ul className="navigation">
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Home
                                                        </a>
                                                        <button onClick={() => toggleClass("home")} className={`toggle-button ${clsname === "home" ? "show" : "hide"} ps-2 pe-2 mt-2 mb-2`}>
                                                            <span className="plus-line"></span>
                                                        </button>

                                                        <ul className={`sub-menu mega-menu ${clsname === "home" ? "show" : "hide"}`}>
                                                            <li>
                                                                <ul className="list-wrap mega-sub-menu">
                                                                    <li>
                                                                        <a href="">
                                                                            Main Home
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Online Course
                                                                            <span className="tg-badge">
                                                                                Hot
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            University
                                                                            <span className="tg-badge-two">
                                                                                New
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Yoga Instructor
                                                                            <span className="tg-badge-two">
                                                                                New
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Kindergarten
                                                                            <span className="tg-badge">
                                                                                Hot
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul className="list-wrap mega-sub-menu">
                                                                    <li>
                                                                        <a href="">
                                                                            Language Academy
                                                                            <span className='tg-badge-two'>
                                                                                New
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Business Coach
                                                                            <span className='tg-badge-two'>
                                                                                New
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Kitchen Coach
                                                                            <span className='tg-badge'>
                                                                                Hot
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>



                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Courses
                                                        </a>
                                                        <button onClick={() => toggleClass("course")} className={`toggle-button ${clsname === "course" ? "show" : "hide"} ps-2 pe-2 mt-2 mb-2`}>
                                                            <span className="plus-line"></span>
                                                        </button>
                                                        <ul className={`sub-menu undefined ${clsname === "course" ? "show" : "hide"}`}>
                                                            <li className="menu-item-has-children ">
                                                                <a href="" >All Courses
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-has-children ">
                                                                <a href="">
                                                                    Course Details
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Course Lesson
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Pages
                                                        </a>
                                                        <button onClick={() => toggleClass("pages")} className={`toggle-button ${clsname === "pages" ? "show" : "hide"} ps-2 pe-2 mt-2 mb-2`}>
                                                            <span className="plus-line">
                                                            </span>
                                                        </button>
                                                        <ul className={`sub-menu undefined ${clsname === "pages" ? "show" : "hide"} `}>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    About Us
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Our Instructors
                                                                </a>
                                                                <button onClick={() => toggleSubClass("our-ins")} className={`toggle-button ${subClsname === "our-ins" ? "show" : "hide"} ps-2 pe-2 mt-1 mb-2`}>
                                                                    <span className="plus-line"></span>
                                                                </button>
                                                                <ul className={`sub-menu ${subClsname === "our-ins" ? "show" : "hide"}`}>
                                                                    <li>
                                                                        <a href="">Our Instructors</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">Instructor Details</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Our Events
                                                                </a>
                                                                <button onClick={() => toggleSubClass("our-events")} className={`toggle-button ${subClsname === "our-events" ? "show" : "hide"}`}>
                                                                    <span className="plus-line"></span>
                                                                </button>

                                                                <ul className={`sub-menu n ${subClsname === "our-events" ? "show" : "hide"} `}>
                                                                    <li>
                                                                        <a href="">
                                                                            Our Events
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Events Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Shop
                                                                </a>
                                                                <button onClick={() => toggleSubClass("shop")} className={`toggle-button ${subClsname === "shop" ? "show" : "hide"} mt-1`}>
                                                                    <span className="plus-line"></span>
                                                                </button>

                                                                <ul className={`sub-menu ${subClsname === "shop" ? "show" : "hide"}`} >
                                                                    <li><a href="" >Shop</a></li>
                                                                    <li><a href="">Shop Details</a></li>
                                                                    <li><a href="">WishList</a></li>
                                                                    <li><a href="">Cart Page</a></li>
                                                                    <li><a href="">Checkout</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Blog
                                                                </a>
                                                                <button onClick={() => toggleSubClass("blog")} className={`toggle-button ${subClsname === "blog" ? "show" : "hide"} ps-2 pe-2 mt-1 mb-2`}>
                                                                    <span className="plus-line"></span>
                                                                </button>
                                                                <ul className={`sub-menu ${subClsname === "blog" ? "show" : "hide"}`}>
                                                                    <li><a href="">Blog Right Sidebar</a></li>
                                                                    <li><a href="">Blog Left Sidebar</a></li>
                                                                    <li><a href="">Blog Full Width</a></li>
                                                                    <li><a href="">Blog Detais</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Student Login
                                                                </a>

                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Student Registration
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    404 Page
                                                                </a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Contact
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Dashboard
                                                        </a>
                                                        <button onClick={() => toggleClass("dashboard")} className={`toggle-button ${clsname === "dashboard" ? "show" : "hide"} ps-2 pe-2 mt-2 mb-2`}>
                                                            <span className="plus-line"></span>
                                                        </button>
                                                        <ul className={`sub-menu undefined ${clsname === "dashboard" ? "show" : "hide"}`}>
                                                            <li className="menu-item-has-children " >
                                                                <a href="" className='me-0 pe-0'>
                                                                    Instructor dashboard
                                                                </a>
                                                                <button onClick={() => toggleSubClass("ins-dash")} className={`toggle-button ${subClsname === "ins-dash" ? "show" : "hide"} ps-2 pe-2 ms-2 mt-2 mb-2`}>
                                                                    <span className="plus-line"></span>
                                                                </button>
                                                                <ul className={`sub-menu ${subClsname === "ins-dash" ? "show" : "hide"}`}>
                                                                    <li><a href="">Dashboard</a></li>
                                                                    <li><a href="">Profile</a></li>
                                                                    <li><a href="">Enrolled Course</a></li>
                                                                    <li><a href="">Wishlist</a></li>
                                                                    <li><a href="">Reviews</a></li>
                                                                    <li><a href="">My Quiz Attemps</a></li>
                                                                    <li><a href="">Order History</a></li>
                                                                    <li><a href="">My Course</a></li>
                                                                    <li><a href="">Announcements</a></li>
                                                                    <li><a href="">Quiz Attemps</a></li>
                                                                    <li><a href="">Assignments</a></li>
                                                                    <li><a href="">Settings</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="">
                                                                    Student Dashboard
                                                                </a>
                                                                <button onClick={() => toggleSubClass("std-dash")} className={`toggle-button ${subClsname === "std-dash" ? "show" : "hide"} ps-2 pe-2 ms-2 mt-2 mb-2`}>
                                                                    <span className="plus-line"></span>
                                                                </button>
                                                                <ul className={`sub-menu ${subClsname === "std-dash" ? "show" : "hide"}`}>
                                                                    <li><a href="">Dashboard</a></li>
                                                                    <li><a href="">Profile</a></li>
                                                                    <li><a href="">Enrolled Courses</a></li>
                                                                    <li><a href="">Wishlist</a></li>
                                                                    <li><a href="">Reviews</a></li>
                                                                    <li><a href="">My Quiz Compitition</a></li>
                                                                    <li><a href="">Order History</a></li>
                                                                    <li><a href="">Settings</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="social-links">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <a href="">
                                                            <i className='fa-brands fa-facebook-f'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i className='fa-brands fa-x-twitter'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i className='fa-brands fa-instagram'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i className='fa-brands fa-linkedin-in'></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i className='fa-brands fa-youtube'></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}