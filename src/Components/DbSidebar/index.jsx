import styles from './DbSidebar.module.scss'
import PropTypes from 'prop-types';

const listOne = [
    { icon: "/src/assets/img/icon_home.png", title: "Dashboard" },
    { icon: "/src/assets/img/icon_avatar.png", title: "My Profile" },
    { icon: "/src/assets/img/icon_book.png", title: "Enrolled Course" },
    { icon: "/src/assets/img/icon_save.png", title: "Wishlist" },
    { icon: "/src/assets/img/icon_book2.png", title: "Reviews" },
    { icon: "/src/assets/img/icon_question.png", title: "My Quiz Attempts" },
    { icon: "/src/assets/img/icon_satchel.png", title: "Order History" },
];

const listTwo = [
    { icon: "/src/assets/img/icon_video.png", title: "My Courses" },
    { icon: "/src/assets/img/icon_promotion.png", title: "Announcements" },
    { icon: "/src/assets/img/icon_chat.png", title: "Quiz Attempts" },
    { icon: "/src/assets/img/icon_list.png", title: "Assignments" }
]

const listThree = [
    { icon: "/src/assets/img/icon_settings.png", title: "Settings" },
    { icon: "/src/assets/img/icon_logout.png", title: "Logout" },
]
const Title = ({ title }) => {
    return (
        <div className={styles.sidebar_title}>
            <h6 className={styles.title}>
                {title}
            </h6>
        </div>
    )
};
Title.propTypes = {
    title: PropTypes.string.isRequired
}
export const DbSideBar = () => {
    return (
        <section className={styles.sidebar_wrap}>
            <Title title={"welcome, jone due"} />
            <nav className={styles.sidebar_menu}>
                <ul>
                    {
                        listOne.map((data, index) => {
                            return (
                                <li key={index}>
                                    <a href="" className='d-flex align-items-center'>
                                        <img src={data.icon} alt="" />
                                        {data.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <Title title={"instructor"} />
            <nav className={styles.sidebar_menu}>
                <ul>
                    {
                        listTwo.map((data, index) => {
                            return (
                                <li key={index}>
                                    <a href="" className='d-flex align-items-center'>
                                        <img src={data.icon} alt="" />
                                        {data.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <Title title={"User"} />
            <nav className={styles.sidebar_menu}>
                <ul>
                    {
                        listThree.map((data, index) => {
                            return (
                                <li key={index}>
                                    <a href="" className='d-flex align-items-center'>
                                        <img src={data.icon} alt="" />
                                        {data.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>




        </section>
    )
}