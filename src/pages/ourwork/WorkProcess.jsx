import React, { useState, useEffect } from 'react';

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      title: "Requirements",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/hr-finding-employee-animation-gif-download-6084264.mp4",
      desc: "We start by understanding your business goals, target audience, and app vision. Our team gathers detailed requirements to define clear objectives and functionalities. This helps us create a solid foundation for success."
    },
    {
      step: 2,
      title: "Agreement",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/agreement-animated-icon-gif-download-10130196.mp4",
      desc: "Once requirements are finalized, we proceed with a transparent project agreement. It includes scope, timeline, deliverables, and budget to ensure clarity and build trust throughout the development process."
    },
    {
      step: 3,
      title: "UI/UX Design",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/ui-ux-animation-gif-download-5966773.mp4",
      desc: "Our creative design team brings your ideas to life with stunning visuals and seamless flow. We design wireframes and prototypes that focus on user experience, accessibility, and brand identity."
    },
    {
      step: 4,
      title: "Development",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/web-development-animation-gif-download-4145615.mp4",
      desc: "Here, your concept turns into a real, functional mobile app. Our developers use modern frameworks like React Native, Flutter, and Swift — ensuring scalability, performance, and long-term flexibility."
    },
    {
      step: 5,
      title: "Testing",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/testing-animated-icon-gif-download-7851492.mp4",
      desc: "Before launch, our QA experts rigorously test your app for performance, usability, and security. Both manual and automated tests ensure a flawless, bug-free experience for users."
    },
    {
      step: 6,
      title: "Client Approval",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/check-badge-animated-icon-gif-download-5728667.mp4",
      desc: "After testing, we hand over the app for your review. Your feedback is carefully incorporated, ensuring every detail matches your expectations before we move to deployment."
    },
    {
      step: 7,
      title: "Deployment",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/website-launch-and-deployment-animated-icon-gif-download-13379423.mp4",
      desc: "It's launch time! We deploy your app seamlessly on all app stores. Our experts ensure smooth submission, configuration, and optimization for maximum visibility and reach."
    },
    {
      step: 8,
      title: "User Experience",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/user-experience-animation-gif-download-4074609.mp4",
      desc: "After launch, users engage with your app. We monitor interactions, gather insights, and make continuous improvements to ensure a smooth and delightful user journey."
    },
    {
      step: 9,
      title: "Analogue Monitor",
      video: "https://cdnl.iconscout.com/lottie/premium/thumb/developer-team-working-on-project-together-animation-gif-download-5073421.mp4",
      desc: "Our partnership continues after launch. We monitor performance, roll out updates, and add new features — ensuring your app stays secure, optimized, and future-ready."
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="work-process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h5>Our Process</h5>
          <h2>From Concept to Launch</h2>
          <p>Follow our systematic approach to deliver excellence at every step</p>
        </div>

        {/* Process Flow */}
        <div className="process-flow">
          {/* Progress Bar */}
          <div className="progress-container">
            
            <div 
              className="progress-bar" 
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Steps Navigation */}
          <div className="steps-navigation">
            {steps.map((step, index) => (
              <button
                key={step.step}
                className={`step-nav-item ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-nav-number">{step.step}</span>
                <span className="step-nav-title">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="active-step-content">
            <div className="step-video">
              <video
                src={steps[activeStep].video}
                autoPlay
                loop
                muted
                playsInline
                title={`${steps[activeStep].title} animation`}
              ></video>
            </div>
            <div className="step-info">
              <div className="step-header">
                <span className="step-badge">Step {steps[activeStep].step}</span>
                <h3>{steps[activeStep].title}</h3>
              </div>
              <p>{steps[activeStep].desc}</p>
              <div className="step-actions">
                <button className="btn-primary">
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
                <div className="step-controls">
                  <button 
                    className="nav-btn"
                    onClick={() => setActiveStep(activeStep > 0 ? activeStep - 1 : steps.length - 1)}
                  >
                    <i className="fas fa-chevron-left"></i> Previous
                  </button>
                  <button 
                    className="nav-btn"
                    onClick={() => setActiveStep(activeStep < steps.length - 1 ? activeStep + 1 : 0)}
                  >
                    Next <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .work-process-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
         
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h5 {
          font-size: 16px;
          font-weight: 600;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .section-header h2 {
          font-size: 42px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .section-header p {
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .process-flow {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
         
        }

        .progress-container {
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          margin-bottom: 40px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .steps-navigation {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .step-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          padding: 15px 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 80px;
        }

        .step-nav-item:hover {
          background: #f8fafc;
        }

        .step-nav-item.active {
          background: #4f46e5;
          color: white;
        }

        .step-nav-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .step-nav-item.active .step-nav-number {
          background: white;
          color: #4f46e5;
        }

        .step-nav-title {
          font-size: 12px;
          font-weight: 500;
          text-align: center;
        }

        .active-step-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .step-video {
  position: relative;
  transition: .4s ease;
}

.step-video:hover {
  box-shadow: 0 0 20px rgba(79,70,229,0.4);
  transform: scale(1.03);
}


        .step-video video {
          width: 100%;
          height: auto;
          display: block;
        }

        .step-info {
          padding: 20px 0;
        }

        .step-header {
          margin-bottom: 20px;
        }

        .step-badge {
          display: inline-block;
          background: #4f46e5;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .step-info h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .step-info p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .step-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-primary {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background: #4338ca;
          transform: translateY(-2px);
        }

        .step-controls {
          display: flex;
          gap: 15px;
        }

        .nav-btn {
          background: none;
          border: 1px solid #e2e8f0;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .nav-btn:hover {
          border-color: #4f46e5;
          color: #4f46e5;
        }

        /* ----------------------------------------------
   MOBILE-OPTIMIZED WORK-PROCESS DESIGN
   ---------------------------------------------- */
@media (max-width: 768px) {

  .work-process-section {
    padding: 40px 0 !important;
  }

  .section-header h2 {
    font-size: 26px !important;
    line-height: 1.3 !important;
  }

  .section-header p {
    font-size: 15px !important;
    padding: 0 10px !important;
  }

  /* Make the whole process a vertical flow */
  .process-flow {
    padding: 20px !important;
    box-shadow: none !important;
    border-radius: 12px !important;
  }

  .steps-navigation {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 5px;
    scrollbar-width: none;
  }

  .steps-navigation::-webkit-scrollbar {
    display: none;
  }

  .step-nav-item {
    min-width: 90px;
    background: #f1f5f9;
    border-radius: 10px;
    padding: 10px;
  }

  .step-nav-title {
    font-size: 10px !important;
  }

  /* MOBILE CARD DESIGN */
  .active-step-content {
    display: block !important;
  }

  .step-video {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
  }

  .step-video video {
    width: 100%;
    height: 180px !important;
    object-fit: cover;
    border-radius: 12px;
  }

  .step-info {
    padding: 10px !important;
    text-align: left !important;
  }

  .step-info h3 {
    font-size: 20px !important;
    line-height: 1.3 !important;
  }

  .step-info p {
    font-size: 15px !important;
    line-height: 1.5 !important;
    margin-bottom: 20px !important;
  }

  /* BUTTON DESIGN CLEAN */
  .step-actions {
    flex-direction: column !important;
    gap: 12px !important;
    width: 100%;
    align-items: stretch !important;
  }

  .btn-primary {
    width: 100% !important;
    justify-content: center;
    padding: 12px 0 !important;
    font-size: 15px;
  }

  .step-controls {
    display: flex !important;
    width: 100% !important;
    justify-content: space-between !important;
  }

  .nav-btn {
    flex: 1;
    text-align: center;
    padding: 12px 0 !important;
    font-size: 14px !important;
  }
}
/* ---------------------------------------------------
   HIDE STEP NAVIGATION & PROGRESS BAR ON MOBILE
   --------------------------------------------------- */
@media (max-width: 768px) {

  /* Hide the horizontal steps menu */
  .steps-navigation {
    display: none !important;
  }

  /* Hide the progress bar */
  .progress-container {
    display: none !important;
  }

  /* Increase spacing since items are hidden */
  .process-flow {
    padding-top: 10px !important;
  }
}

      `}</style>
    </div>
  );
};

export default WorkProcess;