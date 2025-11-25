
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { blogPosts } from './blogData';

// const BlogDetail = () => {
//     const { id } = useParams();

//     // Find the post with the matching ID
//     const post = blogPosts.find(post => post.id === parseInt(id));

//     // Fixed categories list
//     const categories = ["All", "Mobile Development", "Web Development", "Infrastructure", "UI/UX Design", "Digital Strategy"];

//     // Get recent posts (excluding current post)
//     const recentPosts = blogPosts
//         .filter(p => p.id !== post?.id)
//         .slice(0, 4);

//     // Handle case where post is not found
//     if (!post) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
//                     <h2 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h2>
//                     <p className="text-slate-600 mb-6">The requested blog post doesn't exist or has been removed.</p>
//                     <Link
//                         to="/blogs"
//                         className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
//                     >
//                         Back to Blogs
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             {/* Header Section */}
//             <div
//                 className="about-header-area"
//                 style={{
//                     backgroundImage: 'url(../assets/img/bg/inner-header.png)',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <img
//                     src="../assets/img/elements/elements1.png"
//                     alt=""
//                     className="elements1 aniamtion-key-1"
//                 />
//                 <img
//                     src="../assets/img/elements/star2.png"
//                     alt=""
//                     className="star2 keyframe5"
//                 />
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 m-auto">
//                             <div className="about-inner-header heading9 text-center">
//                                 <h1>Blog Details</h1>
//                                 <a href="#">
//                                     Home <i className="fa-solid fa-angle-right"></i>{' '}
//                                     <span>Our Blog</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Blog Content Section */}
//             <div className="blog-auhtor-section-area sp1">
//                 <div className="container">
//                     <div className="row">
//                         {/* Main Content */}
//                         <div className="col-lg-8">
//                             <div className="blog-auhtor-sidebar-area heading2">
//                                 {/* Tags Area (Author & Date) */}
//                                 <div className="tags-area">
//                                     <ul className='d-flex flex-row align-items-center'>
//                                         <li className='d-flex align-items-center'>
//                                             <img src="../assets/img/icons/contact1.svg" alt="" className='pe-1' />
//                                             <a href="#"> {post.author}</a></li>
//                                         <li className='d-flex align-items-center'>
//                                             <img src="../assets/img/icons/calender1.svg" alt="" className='pe-1' />
//                                             <a href="#">{post.date}</a>
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 {/* Blog Title */}
//                                 <h2>{post.title}</h2>
//                                 <div className="space34"></div>

//                                 {/* Featured Image */}
//                                 <div className="img1">
//                                     <img src={post.imageUrl} alt={post.title} />
//                                 </div>
//                                 <div className="space24"></div>

//                                 {/* Full Description */}
//                                 <p>{post.fullDescription}</p>
//                                 {/* <div className="space50"></div> */}

//                                 {/* Blog Sections */}
//                                 {post.sections.map((section, index) => (
//                                     <div key={index}>
//                                         <h3 className='mt-4 mt-lg-5 mb-2'>{section.title}</h3>
//                                         {section.content && (
//                                             <p>{section.content}</p>
//                                         )}

//                                         {section.additionalContent && (
//                                             <p>{section.additionalContent}</p>
//                                         )}

                        
//                                         {section.points && section.points.map((point, i) => (
//                                             <div className="right-area mt-3" key={i}>
//                                                 <div className="check1">
//                                                     <img src="../assets/img/icons/check4.svg" alt="" />
//                                                 </div>
//                                                 <div className="content">
//                                                     <p>{point}</p>
//                                                 </div>
//                                             </div>
//                                         ))}

//                                         {section.subSections && section.subSections.map((subSection, subIndex) => (
//                                             <div key={subIndex}>
//                                                 <h4 className='my-3'>{subSection.title}</h4>
//                                                 {/* <div className="space24"></div> */}

//                                                 {subSection.content && (
//                                                     <p>{subSection.content}</p>
//                                                 )}

//                                                 {subSection.points && subSection.points.map((point, i) => (
//                                                     <div className="right-area mt-3" key={i}>
//                                                         <div className="check1">
//                                                             <img src="../assets/img/icons/check4.svg" alt="" />
//                                                         </div>
//                                                         <div className="content">
//                                                             <p>{point}</p>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         ))}

//                                         {/* <div className="space50"></div> */}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Sidebar */}
//                         <div className="col-lg-4">
//                             <div className="blog-sidebar-area">
//                                 <div className="space32"></div>

                               

//                                 {/* Recent Posts */}
//                                 <div className="posts-area">
//                                     <h3>Recent Post</h3>
//                                     {recentPosts.map((recentPost, index) => (
//                                         <div className={`post-auhtor-area ${index % 2 === 1 ? 'box2' : ''}`} key={index}>
//                                             <div className="img1">
//                                                 <img src={recentPost.imageUrl} alt={recentPost.title} />
//                                             </div>
//                                             <div className="content">
//                                                 <a href="#" className="date d-flex">
//                                                     <img src="../assets/img/icons/calender1.svg" alt="" />
//                                                     {recentPost.date}
//                                                 </a>
//                                                 <Link to={`/blogs/${recentPost.id}`} className="head">
//                                                     {recentPost.title}
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="space32"></div>

//                                 {/* Contact Section */}
//                                 <div className="others-area">
//                                     <h3>If You Need Any Help Contact With Us</h3>
//                                     <div className="space16"></div>
//                                     <div className="btn-area">
//                                         <a href="tel:78423 85604" className="header-btn1">
//                                             +91 78423 85604<span><i className="fa-solid fa-arrow-right"></i></span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetail;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';

const BlogDetail = () => {
    const { id } = useParams();

    // Find the post with the matching ID
    const post = blogPosts.find(post => post.id === parseInt(id));

    // Fixed categories list
    const categories = ["All", "Mobile Development", "Web Development", "Infrastructure", "UI/UX Design", "Digital Strategy"];

    // Get recent posts (excluding current post)
    const recentPosts = blogPosts
        .filter(p => p.id !== post?.id)
        .slice(0, 4);

    // Handle case where post is not found
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h2>
                    <p className="text-slate-600 mb-6">The requested blog post doesn't exist or has been removed.</p>
                    <Link
                        to="/blogs"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Header Section */}
            <div
                className="about-header-area"
                style={{
                    backgroundImage: 'url(../assets/img/bg/inner-header.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <img
                    src="../assets/img/elements/elements1.png"
                    alt="Decorative element"
                    className="elements1 aniamtion-key-1"
                />
                <img
                    src="../assets/img/elements/star2.png"
                    alt="Decorative star element"
                    className="star2 keyframe5"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Blog Details</h1>
                                <a href="#">
                                    Home <i className="fa-solid fa-angle-right"></i>{' '}
                                    <span>Our Blog</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="blog-auhtor-section-area sp1">
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <div className="col-lg-8">
                            <div className="blog-auhtor-sidebar-area heading2">
                                {/* Tags Area (Author & Date) */}
                                <div className="tags-area">
                                    <ul className='d-flex flex-row align-items-center'>
                                        <li className='d-flex align-items-center'>
                                            <img src="../assets/img/icons/contact1.svg" alt="Author icon" className='pe-1' />
                                            <a href="#"> {post.author}</a></li>
                                        <li className='d-flex align-items-center'>
                                            <img src="../assets/img/icons/calender1.svg" alt="Calendar icon" className='pe-1' />
                                            <a href="#">{post.date}</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Blog Title */}
                                <h2>{post.title}</h2>
                                <div className="space34"></div>

                                {/* Featured Image */}
                                <div className="img1">
                                    <img src={post.imageUrl} alt={`Featured image for ${post.title}`} />
                                </div>
                                <div className="space24"></div>

                                {/* Full Description */}
                                <p>{post.fullDescription}</p>
                                {/* <div className="space50"></div> */}

                                {/* Blog Sections */}
                                {post.sections.map((section, index) => (
                                    <div key={index}>
                                        <h3 className='mt-4 mt-lg-5 mb-2'>{section.title}</h3>
                                        {section.content && (
                                            <p>{section.content}</p>
                                        )}

                                        {section.additionalContent && (
                                            <p>{section.additionalContent}</p>
                                        )}

                        
                                        {section.points && section.points.map((point, i) => (
                                            <div className="right-area mt-3" key={i}>
                                                <div className="check1">
                                                    <img src="../assets/img/icons/check4.svg" alt="Checkmark icon" />
                                                </div>
                                                <div className="content">
                                                    <p>{point}</p>
                                                </div>
                                            </div>
                                        ))}

                                        {section.subSections && section.subSections.map((subSection, subIndex) => (
                                            <div key={subIndex}>
                                                <h4 className='my-3'>{subSection.title}</h4>
                                                {/* <div className="space24"></div> */}

                                                {subSection.content && (
                                                    <p>{subSection.content}</p>
                                                )}

                                                {subSection.points && subSection.points.map((point, i) => (
                                                    <div className="right-area mt-3" key={i}>
                                                        <div className="check1">
                                                            <img src="../assets/img/icons/check4.svg" alt="Checkmark icon" />
                                                        </div>
                                                        <div className="content">
                                                            <p>{point}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}

                                        {/* <div className="space50"></div> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="blog-sidebar-area">
                                <div className="space32"></div>

                               

                                {/* Recent Posts */}
                                <div className="posts-area">
                                    <h3>Recent Post</h3>
                                    {recentPosts.map((recentPost, index) => (
                                        <div className={`post-auhtor-area ${index % 2 === 1 ? 'box2' : ''}`} key={index}>
                                            <div className="img1">
                                                <img src={recentPost.imageUrl} alt={`Thumbnail for ${recentPost.title}`} />
                                            </div>
                                            <div className="content">
                                                <a href="#" className="date d-flex">
                                                    <img src="../assets/img/icons/calender1.svg" alt="Calendar icon" />
                                                    {recentPost.date}
                                                </a>
                                                <Link to={`/blogs/${recentPost.id}`} className="head">
                                                    {recentPost.title}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space32"></div>

                                {/* Contact Section */}
                                <div className="others-area">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space16"></div>
                                    <div className="btn-area">
                                        <a href="tel:78423 85604" className="header-btn1">
                                            +91 78423 85604<span><i className="fa-solid fa-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;