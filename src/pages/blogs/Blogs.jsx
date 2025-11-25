

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from './blogData';
import CTA from '../cta/CTA';

const BlogList = () => {
  // Categories for filtering
  const categories = ["All", "Mobile Development", "Web Development", "Infrastructure", "UI/UX Design", "Digital Strategy"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <div
        className="about-header-area"
        style={{
          backgroundImage: 'url(assets/img/bg/inner-header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1"
        />
        <img
          src="assets/img/elements/star2.png"
          alt="Decorative star element"
          className="star2 keyframe5"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Techland Blogs</h1>
                <Link to="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Blogs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="works-inner-section-area sp2 service13-section-area">
        <div class="container">
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div> */}

          {/* Blog Posts Grid */}
          <div className="blog1-scetion-area  sp2">
            <div className="container">
              <div className="row">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="col-lg-4 col-md-6 mb-3">
                    <div className="blog-author-boxarea">
                      <div className="img1">
                        <img src={post.imageUrl} alt={`Featured image for blog post: ${post.title}`} />
                      </div>
                      <div className="content-area">
                        <div className="tags-area">

                          <ul className='d-flex flex-row align-items-center'>
                            <li className='d-flex align-items-center'>
                              <img src="assets/img/icons/contact1.svg" alt="Author icon" className='pe-1' />
                              <a href="#"> {post.author}</a></li>
                            <li className='d-flex align-items-center'>
                              <img src="assets/img/icons/calender1.svg" alt="Calendar icon" className='pe-1' />
                              <a href="#">{post.date}</a>
                            </li>
                          </ul>
                        </div>
                        <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                        <p>{post.shortDescription}</p>
                        <Link to={`/blogs/${post.id}`} className="readmore">
                          Read More <i class="fa-solid fa-arrow-right"></i>

                        </Link>
                      </div>
                    </div>
                    <div className="space30 d-lg-none d-block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




      </div>
      <CTA />
    </div>
  );
};

export default BlogList;