import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from './blogData';
import CTA from '../cta/CTA';

export default function BlogList() {
  const categories = ["All", "Mobile Development", "Web Development", "Infrastructure", "UI/UX Design", "Digital Strategy"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const cardsRef = useRef([]);
  const [viewAll, setViewAll] = React.useState(false);


  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, filteredPosts.length);
  }, [filteredPosts.length]);

  /* INTERACTIVE TILT + PARALLAX */
  useEffect(() => {
    const handleMove = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rx = ((y - cy) / cy) * 8;
      const ry = ((cx - x) / cx) * 12;

      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;

      const img = el.querySelector('.layer-image');
      const content = el.querySelector('.layer-content');

      if (img) img.style.transform = `translate(${(x - cx) * 0.05}px, ${(y - cy) * 0.05}px)`;
      if (content) content.style.transform = `translate(${(cx - x) * 0.03}px, ${(cy - y) * 0.03}px)`;
    };

    const handleLeave = (el) => {
      el.style.transition = 'transform 450ms cubic-bezier(.22,.61,.36,1)';
      el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';

      const img = el.querySelector('.layer-image');
      const content = el.querySelector('.layer-content');

      if (img) img.style.transform = 'translate(0,0)';
      if (content) content.style.transform = 'translate(0,0)';

      setTimeout(() => (el.style.transition = ''), 500);
    };

    const items = cardsRef.current;
    items.forEach(el => {
      if (!el) return;
      el.onmousemove = (e) => handleMove(e, el);
      el.onmouseleave = () => handleLeave(el);
    });

    return () => {
      items.forEach(el => {
        if (!el) return;
        el.onmousemove = null;
        el.onmouseleave = null;
      });
    };
  }, [filteredPosts]);

  /* APPLE-STYLE SCROLL REVEAL */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.15 });

    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => cardsRef.current.forEach(el => el && observer.unobserve(el));
  }, [filteredPosts]);

  const setRef = (el, idx) => {
    if (el) {
      cardsRef.current[idx] = el;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative">
      <style>{`
        @keyframes appleRevealSmooth {
          0% { opacity:0; transform:perspective(1200px) rotateX(14deg) rotateY(8deg) translateY(60px) scale(.94); }
          40% { opacity:1; transform:perspective(1200px) rotateX(6deg) rotateY(3deg) translateY(18px) scale(1.01); }
          100% { opacity:1; transform:perspective(1200px) rotateX(0) rotateY(0) translateY(0) scale(1); }
        }

        .blog-card-wrap { opacity:0; transform-style:preserve-3d; }
        .blog-card-wrap.revealed {
          animation: appleRevealSmooth 1s cubic-bezier(.22,.61,.36,1) forwards;
        }

        /* Custom minimal scrollbar */
        .custom-scroll::-webkit-scrollbar { height: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.06); border-radius:10px; }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #0005, #0009);
          border-radius: 10px;
        }
 /* Ultra soft shadow */
.blog-card-wrap {
  transition: box-shadow .35s ease, transform .35s ease;
}

.blog-card-wrap:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
}

/* Smooth fade overlay */
.blog-card-wrap::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0.25), transparent);
  opacity: 0;
  transition: opacity .4s ease;
}

.blog-card-wrap:hover::before {
  opacity: .4;
}
@keyframes slideUpFade {
  0% { opacity:0; transform:translateY(20px); }
  100% { opacity:1; transform:translateY(0); }
}

.grid .blog-card-wrap {
  animation: slideUpFade .6s ease both;
}
  button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0px);
}


        .ambient-glow { transition: opacity .6s ease; }
        .blog-card-wrap:hover .ambient-glow { opacity:.55; }

        .gloss { transition: opacity .6s ease; }
        .blog-card-wrap:hover .gloss { opacity:.35; }
      `}</style>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Techland Blogs</h1>
          <p className="text-lg opacity-80 mb-6">Ideas, insights & innovation</p>
          <div className="flex justify-center gap-2 text-sm opacity-90">
            <Link to="/">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span>Blogs</span>
          </div>
        </div>
      </section>

      

      {/* HORIZONTAL APPLE-TV SCROLL */}
    {/* BLOG LIST DISPLAY MODE */}
<section className="py-20 lg:py-24">
  <div className="container mx-auto px-4 flex justify-between items-center mb-6">
  <h2 className="text-2xl font-bold">Latest Blogs</h2>
  <button
    onClick={() => setViewAll(!viewAll)}
    className="px-6 py-2.5 rounded-full backdrop-blur-md bg-black/80 text-white hover:bg-black transition-all shadow-sm hover:shadow-md"

  >
    {viewAll ? "Show Slider" : "View All"}
  </button>
</div>

  <div className="container mx-auto px-4">

    {/* CONDITIONAL VIEW */}
    {!viewAll ? (
      /* SLIDER MODE */
      <div className="flex gap-10 overflow-x-auto custom-scroll snap-x snap-mandatory pb-6">
        {filteredPosts.map((post, idx) => (
          <article
            key={post.id}
            ref={(el) => setRef(el, idx)}
            className="blog-card-wrap snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[45%] bg-white rounded-3xl shadow-xl border border-gray-100 relative group overflow-hidden"
          >
            {/* SAME CARD MARKUP */}
            <div className="ambient-glow absolute inset-0 -z-10 bg-gradient-to-br from-white/70 to-white/10 blur-3xl opacity-0"></div>
            <div className="gloss absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 mix-blend-overlay"></div>

            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-1/2 h-56 lg:h-auto order-2 lg:order-1 overflow-hidden">
                <img src={post.imageUrl} className="layer-image absolute inset-0 w-full h-full object-cover duration-700" />
              </div>

              <div className="layer-content p-6 lg:w-1/2 flex flex-col justify-center order-1 lg:order-2 relative z-10">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3"><Link to={`/blogs/${post.id}`}>{post.title}</Link></h2>
                <p className="text-gray-600 line-clamp-3 mb-5">{post.shortDescription}</p>

                <Link to={`/blogs/${post.id}`} className="inline-flex items-center gap-2 font-semibold">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    ) : (
      /* GRID MODE (3 cards per row) */
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post, idx) => (
          <article
            key={post.id}
            ref={(el) => setRef(el, idx)}
            className="blog-card-wrap bg-white rounded-3xl shadow-xl border border-gray-100 relative group overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={post.imageUrl} className="layer-image absolute inset-0 w-full h-full object-cover duration-700" />
            </div>

            <div className="layer-content p-6">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3"><Link to={`/blogs/${post.id}`}>{post.title}</Link></h2>
              <p className="text-gray-600 line-clamp-3 mb-5">{post.shortDescription}</p>

              <Link to={`/blogs/${post.id}`} className="inline-flex items-center gap-2 font-semibold">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    )}
  </div>
</section>


      <CTA />
    </div>
  );
}
