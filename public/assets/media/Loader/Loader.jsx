import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loading-page">
            <div className="loading-container">
                <div className="loading-ring ring-1"></div>
                <div className="loading-ring ring-2"></div>
                <div className="loading-ring ring-3"></div>
                <div className="loading-ring ring-4"></div>
                <h3 className="loading-text">loading</h3>
            </div>
        </div>
    );
};

export default Loader;
