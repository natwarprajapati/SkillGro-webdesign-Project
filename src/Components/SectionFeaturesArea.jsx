import '../style/Features.css'

function SectionFeaturesArea() {
    const featuresData=[
        {
            id:1,
            title:"Learn with exports",
            paragraph:"Curate anding area share Pluralsight content to reach your",
            image:"/src/assets/img/features_icon01.svg"
        },
        {
            id:2,
            title:"Learn Anything",
            paragraph:"Curate anding area share Pluralsight content to reach your",
            image:"/src/assets/img/features_icon02.svg"
        },
        {
            id:3,
            title:"Get Online Certificate",
            paragraph:"Curate anding area share Pluralsight content to reach your",
            image:"/src/assets/img/features_icon03.svg"
        },
        {
            id:4,
            title:"E-mail Marketing",
            paragraph:"Curate anding area share Pluralsight content to reach your",
            image:"/src/assets/img/features_icon04.svg"
        },
    ]
  return (
    <>
    <section className="features_area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section_title white-title text-center mb-5">
                        <span className="sub-title">
                            how we start journey
                        </span>
                        <h2 className="title">
                            start your learning journey today!
                        </h2>
                        <p>
                        Groove’s intuitive shared inbox makesteam members together
                        <br />
                        organize, prioritize and.In this episode.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {
                    featuresData.map((data,index)=>{
                        return(
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="features_item">
                        <div className="features_icon">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="features-content">
                            <h4 className="title">
                                {data.title}
                            </h4>
                            <p>
                                {data.paragraph}
                            </p>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
              
            </div>
        </div>
    </section>
    </>
  )
}

export default SectionFeaturesArea