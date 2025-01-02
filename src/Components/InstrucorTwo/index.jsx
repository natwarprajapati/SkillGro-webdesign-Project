import './instructor-two.css'
import PropTypes from 'prop-types'

function InstructorItem({ imageUrl }) {
    return (
        <div className="col-xl-6">
            <div className="instructor__item-two ">
                <div className="instructor_thumb-two">
                    <img src={imageUrl} alt="" />
                    <div className="shape-one">
                        <svg width={224} height={158} viewBox="0 0 224 158" fill="none" xmlns="http://www.w3.org/2000/svg" className="injectable injectable">
                            <path fillRule="evenodd" clipRule="evenodd" d="M-44.3643 224.756C-12.2393 262.104 53.4544 248.637 109.818 221.047C165.437 193.82 219.176 148.021 222.855 93.9472C226.613 38.7315 180.039 6.40385 124.786 1.08905C73.1398 -3.87887 16.1752 23.3672 -19.5665 70.6284C-58.3852 121.958 -77.2268 186.551 -44.3643 224.756Z" fill="currentcolor" />
                            <svg width="100%" height="100%" viewBox="0 0 224 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M-44.3643 224.756C-12.2393 262.104 53.4544 248.637 109.818 221.047C165.437 193.82 219.176 148.021 222.855 93.9472C226.613 38.7315 180.039 6.40385 124.786 1.08905C73.1398 -3.87887 16.1752 23.3672 -19.5665 70.6284C-58.3852 121.958 -77.2268 186.551 -44.3643 224.756Z" fill="currentcolor" style={{ strokeDasharray: '829, 831', strokeDashoffset: 0 }} />
                            </svg></svg>
                    </div>
                    <div className="shape-two">
                        <span className="svg-icon">
                            <svg width="100%" height="100%" viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.3863 32.303C40.459 26.5102 36.4329 12.9132 35.7471 4.86755" stroke="currentcolor" strokeWidth={2} strokeLinejoin="round" style={{ strokeDasharray: '29, 31', strokeDashoffset: 0 }} />
                                <path d="M28.5958 42.9917C22.8296 40.9865 9.59837 35.8853 2.80371 31.5222" stroke="currentcolor" strokeWidth={2} strokeLinejoin="round" style={{ strokeDasharray: '29, 31', strokeDashoffset: 0 }} />
                                <path d="M34.3513 34.837C31.2834 32.212 24.4868 25.9248 21.8428 21.7755" stroke="currentcolor" strokeWidth={2} strokeLinejoin="round" style={{ strokeDasharray: '19, 21', strokeDashoffset: 0 }} />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="instructor_content-two">
                    <h3 className="title">
                        <a href="">Become a Instructor</a>
                    </h3>
                    <p>
                        To take a trivial example, which of us undertakes physical exercise yes is this happen here.
                    </p>
                    <div className="tg-button-wrap">
                        <a href="" className="btn arrow-btn">
                            apply now
                            <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-inject-url="http://127.0.0.1:5500/skillgro-html/assets/img/icons/right_arrow.svg" className="injectable ms-2"><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M1 7L15 7M15 7L9 1M15 7L9 13" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

InstructorItem.propTypes = {
    imageUrl: PropTypes.string.isRequired
}

export const InstucterTwo=()=> {
    return (
        <>
            <section className="instructor_two">
                <div className="container">
                    <div className="instructor_item-wrap-two">
                        <div className="row">
                            <InstructorItem imageUrl={"/src/assets/img/instructor_two01.png"} />
                            <InstructorItem imageUrl={'/src/assets/img/instructor_two02.png'} />
                        </div>
                    </div>
                </div>
            </section></>
    )
}
