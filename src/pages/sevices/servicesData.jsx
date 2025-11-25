

export const servicesData = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Build user-friendly mobile applications for iOS, Android, and cross-platform solutions to bring your ideas to life.",
    // lottieSrc: mobileAppLottie,
    icon: "smartphone",
    color: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-50",
    // ... rest of the data remains the same
    details: [
      {
        subTitle: "iOS & Android Development",
        subDescription: "We build high-quality apps for both platforms using Swift, Kotlin, and Java."
      },
      {
        subTitle: "Cross-Platform Solutions",
        subDescription: "Save time and costs using React Native and Flutter."
      },
      {
        subTitle: "App Maintenance & Updates",
        subDescription: "We offer continuous support and updates for your app to ensure it stays competitive in a rapidly changing market."
      }
    ],
    additionalInfo: "Our end-to-end app development includes UI/UX design, performance optimization, and integration with third-party APIs.",
    workflow: [
      { id: 1, title: 'Requirement Analysis', description: 'Define app goals and features.' },
      { id: 2, title: 'Design', description: 'Create user journey maps and prototypes.' },
      { id: 3, title: 'Development', description: 'Build using native or cross-platform tools.' },
      { id: 4, title: 'Quality Assurance', description: 'Perform functional and performance testing.' },
      { id: 5, title: 'Deployment', description: 'Publish the app on App Stores.' },
      { id: 6, title: 'Maintenance', description: 'Provide updates and add new features.' }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We create responsive, SEO-friendly, and engaging websites tailored to your business needs using the latest technologies.",
    icon: "code",
    color: "from-cyan-600 to-blue-600",
    bgColor: "bg-cyan-50",
    // ... rest of the data
    details: [
      {
        subTitle: "Responsive Design",
        subDescription: "Your website will look great on all devices, from desktops to smartphones. Our team ensures pixel-perfect designs and seamless performance."
      },
      {
        subTitle: "SEO Optimization",
        subDescription: "We ensure your website ranks well in search engines to attract organic traffic. With our expertise in technical SEO and content strategy, you gain maximum visibility."
      },
      {
        subTitle: "E-Commerce Solutions",
        subDescription: "We create seamless e-commerce experiences with secure payment gateways, intuitive navigation, and tailored shopping cart designs."
      }
    ],
    additionalInfo: "We leverage technologies such as React, Angular, Node.js, and WordPress to develop robust web solutions for diverse industries.",
    workflow: [
      { id: 1, title: 'Requirement Gathering', description: 'Understand client goals and target audience.' },
      { id: 2, title: 'Planning', description: 'Develop a sitemap and choose the tech stack.' },
      { id: 3, title: 'Design', description: 'Create mockups and prototypes for approval.' },
      { id: 4, title: 'Development', description: 'Implement responsive design and add functionality.' },
      { id: 5, title: 'Testing', description: 'Ensure cross-browser and cross-device compatibility.' },
      { id: 6, title: 'Launch', description: 'Deploy the website and provide maintenance.' }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Enhance your brand's online presence with tailored strategies, including SEO, social media, PPC, and content marketing.",
    icon: "megaphone",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50",
    // ... rest of the data
    details: [
      {
        subTitle: "SEO & SEM",
        subDescription: "Optimize your site for search engines and increase visibility with paid ads. Our strategies focus on targeted keywords and measurable results."
      },
      {
        subTitle: "Social Media Marketing",
        subDescription: "Reach your target audience through campaigns on platforms like Facebook, Instagram, and LinkedIn, backed by data-driven insights."
      },
      {
        subTitle: "Email Campaigns",
        subDescription: "Engage your customers directly through personalized email campaigns that drive conversions and build brand loyalty."
      }
    ],
    additionalInfo: "We also provide analytics and reporting to measure the success of each campaign and guide future strategies.",
    workflow: [
      { id: 1, title: 'Discovery', description: 'Understand the brand, audience, and goals.' },
      { id: 2, title: 'Strategy Planning', description: 'Develop a tailored marketing plan.' },
      { id: 3, title: 'Content Creation', description: 'Produce engaging content for various platforms.' },
      { id: 4, title: 'Execution', description: 'Run campaigns across social media, email, and search engines.' },
      { id: 5, title: 'Monitoring', description: 'Track performance and engagement metrics.' },
      { id: 6, title: 'Optimization', description: 'Refine strategies based on analytics and feedback.' }
    ]
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Designing and developing tailored software solutions to meet unique business challenges and improve efficiency.",
    icon: "database",
    color: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
    // ... rest of the data
    details: [
      {
        subTitle: "Bespoke Solutions",
        subDescription: "Tailored software built specifically for your business processes and goals, ensuring a perfect fit for your needs."
      },
      {
        subTitle: "Automation",
        subDescription: "Automate repetitive tasks to improve productivity and reduce human error, allowing your team to focus on strategic initiatives."
      },
      {
        subTitle: "Integration Services",
        subDescription: "Integrate with third-party systems, CRMs, and databases to streamline your workflow and improve overall efficiency."
      }
    ],
    additionalInfo: "Our solutions utilize cutting-edge technologies like AI, machine learning, and cloud computing to deliver scalable and secure software.",
    workflow: [
      { id: 1, title: 'Requirement Gathering', description: 'Identify specific business challenges.' },
      { id: 2, title: 'Design', description: 'Create software architecture and prototypes.' },
      { id: 3, title: 'Development', description: 'Implement features using the chosen tech stack.' },
      { id: 4, title: 'Testing', description: 'Perform unit, integration, and system testing.' },
      { id: 5, title: 'Deployment', description: 'Deploy the solution in the desired environment.' },
      { id: 6, title: 'Support', description: 'Provide ongoing maintenance and updates.' }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Crafting user-centric designs to enhance customer experience and engagement, ensuring your digital presence is both functional and visually appealing.",
    icon: "palette",
    color: "from-rose-600 to-pink-600",
    bgColor: "bg-rose-50",
    // ... rest of the data
    details: [
      {
        subTitle: "User Research & Analysis",
        subDescription: "We conduct in-depth research to understand your target audience and create designs that resonate with them."
      },
      {
        subTitle: "Wireframing & Prototyping",
        subDescription: "Our team creates detailed wireframes and interactive prototypes to visualize the user journey before development."
      },
      {
        subTitle: "Visual Design",
        subDescription: "We deliver stunning visual designs that align with your brand identity and enhance user engagement."
      }
    ],
    additionalInfo: "Our approach combines creativity and usability, leveraging tools like Figma, Adobe XD, and Sketch to deliver exceptional designs.",
    workflow: [
      { id: 1, title: 'Discovery', description: 'Understand user needs and project goals.' },
      { id: 2, title: 'Research', description: 'Conduct competitor analysis and gather insights.' },
      { id: 3, title: 'Wireframing', description: 'Design user flows and wireframes.' },
      { id: 4, title: 'Prototyping', description: 'Build interactive prototypes for feedback.' },
      { id: 5, title: 'Visual Design', description: 'Apply branding and visual elements.' },
      { id: 6, title: 'Delivery', description: 'Handoff assets for development.' }
    ]
  },
  {
    id: "staffing-services",
    title: "Staffing Services",
    description:
      "Providing skilled professionals to meet your business requirements and ensure smooth operations across various domains.",
    icon: "users",
    color: "from-violet-600 to-fuchsia-600",
    bgColor: "bg-violet-50",
    // ... rest of the data
    details: [
      {
        subTitle: "IT Staffing",
        subDescription: "We provide highly skilled IT professionals to help you scale your technical team and meet project demands."
      },
      {
        subTitle: "Contract Staffing",
        subDescription: "Flexible staffing solutions that allow you to manage workloads efficiently and meet project deadlines with ease."
      },
      {
        subTitle: "Permanent Staffing",
        subDescription: "Find the right talent for long-term roles in your organization with our rigorous screening and matching process."
      }
    ],
    additionalInfo: "Our staffing solutions cover a wide range of industries, ensuring you get the best talent for your specific needs.",
    workflow: [
      { id: 1, title: 'Consultation', description: 'Understand client staffing needs.' },
      { id: 2, title: 'Sourcing', description: 'Identify and screen candidates.' },
      { id: 3, title: 'Shortlisting', description: 'Provide pre-vetted candidate profiles.' },
      { id: 4, title: 'Interviews', description: 'Coordinate client-candidate interactions.' },
      { id: 5, title: 'Placement', description: 'Onboard the selected candidates.' },
      { id: 6, title: 'Follow-Up', description: 'Ensure candidate satisfaction and performance.' }
    ]
  }
];