import styles from './DashBoardTop.module.scss'
export const DashBoardTop = () => {
    return (
        <section className="dashboard_top position-relative">
            <div className={styles.dashboard_top_bg}>
                <div className={styles.bg_shadow}>
                </div>
                <div className={`${styles.instructor_info} position-absolute left-0 bottom-0 right-0  d-flex align-items-end justify-content-between`}>
                    <div className={`${styles.ins_info_left} d-flex align-items-center`}>
                        <div className={styles.thumb}>
                            <img src="/src/assets/img/details_instructors01.jpg" alt="" />
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.title}>
                                John Due
                            </h4>
                            <div className={`${styles.review_wrap} d-flex align-items-center`}>
                                <div className={`${styles.rating} d-flex align-items-center`}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <span>(15 reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ins_info_right}>
                        <a href="" className={`${styles.btn} d-inline-flex align-items-center`}>
                            Create a New Course
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>


                </div>

            </div>
        </section>
    )
}