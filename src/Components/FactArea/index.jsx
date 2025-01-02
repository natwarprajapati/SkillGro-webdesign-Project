import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"
import './factarea.css'
export const FactArea=()=> {
    const [count, setCount] = useState(false);
    const factRef = useRef([])

    useEffect(() => {
        const handleScroll = () => {
            factRef.current.forEach((item) => {
                if (item && item.getBoundingClientRect().top <= window.innerHeight) {
                    setCount(true)
                }
            });
        };
        window.addEventListener("scroll", handleScroll)
    }, [])

    const factData = [{
        id: 1,
        countNumber: "45",
        quantity: "K+",
        tag: "Active Students"
    },
    {
        id: 2,
        countNumber: "89",
        quantity: "+",
        tag: "Faculty Courses"
    },
    {
        id: 3,
        countNumber: "156",
        quantity: "K",
        tag: "Best Professors"
    },
    {
        id: 4,
        countNumber: "42",
        quantity: "K",
        tag: "Award Achieved"
    }]
    return (
        <section className="fact_area">
            <div className="container">
                <div className="fact_inner-wrap">
                    <div className="row container-box">
                        {
                            factData.map((data, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-6 box">
                                        <div className="fact_item" ref={(element) => factRef.current[index] = element}>
                                            <h2 className="count">
                                                <span>
                                                    {
                                                        count && <CountUp start={0} end={data.countNumber} duration={4} delay={0} style={{ fontFamily: `"Inter",sans-serif` }} />
                                                    }
                                                </span>

                                                {data.quantity}
                                            </h2>
                                            <p>
                                                {data.tag}
                                            </p>
                                            <div className="line">
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
