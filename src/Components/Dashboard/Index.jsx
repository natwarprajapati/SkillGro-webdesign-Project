import styles from './Dashboard.module.scss'
import { DashBoardTop } from "../DashBoardTop"
import { DbSideBar } from '../DbSidebar'

export const Dashboard = () => {
    return (
        <main className={styles.dashboard_main}>
            <div className={`${styles.breadcrump_area} position-relative`}>
                <div className={styles.breadcrumpShapeWrap}>
                    <img src="/src/assets/img/breadcrumb_shape01.svg" className={`${styles.shapeImages} ${styles.img1} ${styles.alltuchtopdown}`} alt="" />
                    <img src="/src/assets/img/breadcrumb_shape02.svg" className={`${styles.shapeImages} ${styles.img2}`} alt="" />
                    <img src="/src/assets/img/breadcrumb_shape03.svg" className={`${styles.shapeImages} ${styles.img3}`} alt="" />
                    <img src="/src/assets/img/breadcrumb_shape04.svg" className={`${styles.shapeImages} ${styles.img4}`} alt="" />
                    <img src="/src/assets/img/breadcrumb_shape05.svg" className={`${styles.shapeImages} ${styles.img5}`} alt="" />
                </div>
            </div>
            <section className={styles.dashboard_area}>
                <div className={`${styles.containercustom} container`}>
                    <DashBoardTop />
                    <div className="inner_wrap">
                        <div className="row">
                            <div className="col-lg-3">
                                <DbSideBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}