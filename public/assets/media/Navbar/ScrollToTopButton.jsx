import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTopButton.css"; // CSS file for styling

const ScrollToTopButton = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        scrollToTop()
    }, [pathname]);

    // Show button when scrolled down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (document.documentElement.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            const scrollTop = document.documentElement.scrollTop; // Pixels scrolled from the top
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollPercentage = (scrollTop / scrollHeight) * 100; // Scroll percentage

            setScrollProgress(scrollPercentage);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top when clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (
        <div className="scroll-to-top-container">
            <div className="progress-ring">
                <svg className="progress-ring-svg" width="80" height="80">
                    <circle
                        className="progress-ring-background"
                        stroke="#8D238A"
                        strokeWidth="8"
                        fill="transparent"
                        cx="40"
                        cy="40"
                        r="35"
                        style={{ strokeDasharray: `${scrollProgress * 2.2} 100` }}

                    />
                    <circle
                        className="progress-ring-circle"
                        stroke="#141c83"
                        strokeWidth="8"
                        fill="transparent"
                        cx="40"
                        cy="40"
                        r="35"
                        style={{ strokeDasharray: `${scrollProgress * 2.2} 100` }}
                    />
                </svg>
                <button
                    className={`scroll-to-top ${isVisible ? "show" : "hide"}`}
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
