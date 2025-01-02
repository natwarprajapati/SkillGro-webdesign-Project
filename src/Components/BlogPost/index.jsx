import './blogpost.css'
export const BlogPost= ()=> {
    const postData =[{
        postTag:"Marketing",
        imageUrl:"/src/assets/img/blog_post01.jpg",
        title:"How to Become idiculously Self-Aware In 20 Mnutes"
    },
    {
        postTag:"Students",
        imageUrl:"/src/assets/img/blog_post02.jpg",
        title:"Get Started With UI Design With Tips To Speed"
    },
    {
        postTag:"Science",
        imageUrl:"/src/assets/img/blog_post03.jpg",
        title:"Make Your Own Expanding Contracting Content"
    },
    {
        postTag:"Agency",
        imageUrl:"/src/assets/img/blog_post04.jpg",
        title:"What we are capable to usually discovered"
    }]
    return (
            <section className="blog_post-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-4">
                                <span className="sub-title">
                                    News & Blogs
                                </span>
                                <h2 className="title">
                                    Our latest news feed
                                </h2>
                                <p>when known printer took a galley of type scrambl edmake</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-20" >
                        {
                            postData.map((data,index)=>{
                                return(
                                    
                                    <div  key={index} className="col-xl-3 col-md-6">
                            <div className="blog_post-item">
                                <div className="blog_post-thumb">
                                    <a href="" className='shine_animate-link'>
                                        <img src={data.imageUrl} alt="" />
                                    </a>
                                    <a href="" className="post-tag">

                                        {data.postTag}
                                    </a>
                                </div>
                                <div className="blog_post-content">
                                    <div className="blog_post-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <i className="fa-regular fa-calendar"></i>
                                                20 july, 2024
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-user" ></i>
                                                by
                                                <a href="">Admin</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <a href="">
                                            {data.title}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    )
}
