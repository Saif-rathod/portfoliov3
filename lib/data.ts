import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/gpt.png";
import ozdevsImg from "@/public/amora.webp";
import assetTradingImg from "@/public/math.jpg";
import techprowlImg from "@/public/deep.jpg";
import taskManagerImg from "@/public/anomaly.webp";
import familyTreeImg from "@/public/f1.png";
import binaryGameImg from "@/public/BERT.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Pyramid Solutions (Rajkot, on-site)",
    description:
      "Currently building Amora at Pyramid Solutions—an AI-powered gift-sending platform with automated reminders via SMS, WhatsApp, and email.Enhancing my expertise in full-stack development, AI automation, and database management.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - June 2025",
  },
  {
    title: "AI Web developer",
    location: "AISUGGESTED (Delhi, remote)",
    description:
      "Curated and added 100+ AI tools, increasing reach by 40% for the Phoenix platform. Implemented automation scripts for tool integration, reducing manual workload by 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - July 2024",
  },
  {
    title: "Yuva Sangam Exposure Intern",
    location: "Rajiv Gandhi University, Guwahati (On-site)",
    description:
      "Represented Gujarat delegates and delivered a speech at Raj Bhavan, Arunachal Pradesh. Engaged with Hon'ble Governor Shri K. T. Parnaik on tourism development initiatives. Participated in cultural exchange programs, enhancing cross-cultural understanding. Engaged with local communities, fostering connections and promoting cultural diversity.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - May 2024",
  },
  {
    title: "Machine Learning Engineer Intern",
    location: "CodeClause (Bangalore, remote)",
    description:
    "Developed Machine Learning and Computer Vision projects. Optimized deep learning models, improving accuracy by 25%. Worked on data preprocessing, model fine-tuning, and performance evaluation to enhance AI-driven solutions",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - November 2023",
  },
] as const;

export const projectsData = [
  {
    title: "GPTX",
    description:
    "Built a 10.8M-parameter Bigram LM with character embeddings, achieving 1.07/1.48 train-val loss over 5K CUDA iterations. Engineered an 8-token context model with 32-token batches for 501-token Shakespearean text generation via softmax sampling. Optimized training efficiency with PyTorch, leveraging GPU acceleration for faster convergence and improved text coherence.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      
      "logos:pytorch-icon",
      "logos:numpy",
      "logos:python",
      "logos:pandas-icon",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/saif-rathod/gptx",
    demoLink: "https://www.youtube.com/",
  },
  {
    title: "AMORA - save your love",
    description:
      "An AI-powered gift-sending platform with automated reminders via SMS, WhatsApp, and email. Designed a modern, visually rich UI using Next.js and Tailwind CSS. Integrated Supabase for backend management and AI-driven personalization to enhance user experience.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:nextjs-icon",
      "logos:typescript-icon",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:supabase-icon",
    ],
    imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/saif-rathod/amora",
  },
  {
    title: "Magic Calc",
    description:
      "Developed a web-based tool that visualizes mathematical problems and provides solutions. Utilized FastAPI and Gemini API for dynamic solution visualization, integrated with a Vite and React frontend. Enhanced user interaction with real-time rendering and AI-powered explanations for a seamless learning experience.",
    tags: ["Typescript", "MariaDB", "Swing"],
    icons: ["logos:javascript", "logos:typescript-icon","logos:python", "logos:fastapi-icon"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/saif-rathod/magic-calc",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: "DeepFake Detection",
    description:
      "Developing 'Analyze the Temporal and Spatial Inconsistencies in Deepfake Videos Using Deep Learning Architectures', leveraging CNNs and RNNs to detect deepfake artifacts. Focused on enhancing video forensics by analyzing temporal frame inconsistencies and spatial anomalies for robust deepfake detection ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:pytorch-icon", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/saif-rathod/deepfake",
    // urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Anomaly Detection for industrial equipment",
    description:
      "Developed an industrial anomaly detection system leveraging Anomalib, PatchCore, and ResNet to automate defect detection in manufacturing. Utilized deep learning-based feature extraction and patch-based anomaly localization to improve inspection accuracy. Enhanced quality control by minimizing manual efforts and increasing detection precision",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:pytorch-icon", "logos:django-icon"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/saif-rathod/anomaly",
  },
  {
    title: "F1 predictor",
    description:
      "Developed an F1 race winner prediction model using machine learning. Analyzed historical race data, driver performance, track conditions, and team strategies to enhance predictive accuracy.",
    tags: ["Python, Flask, Jupyter"],
    icons: ["logos:python", "logos:pytorch-icon"],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/saif-rathod/f1",
    // demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
  {
    title: "BERT Sentiment Analysis",
    description:
      "Implemented a sentiment analysis model using BERT to classify text with high accuracy. Fine-tuned transformer-based embeddings on domain-specific data to enhance sentiment detection and contextual understanding",
    tags: ["Python", "Pytorch", "Flask"],
    icons: ["logos:python", "logos:pytorch-icon", "logos:flask"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/saif-rathod/bertSA",
    // demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  },
] as const;

export const skillsData = [

  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Deep Learning",
    icon: "logos:pytorch-icon",
  },
  {
    name: "AI/ML",
    icon: "logos:ai", 
  },
  {
    name: "Pytorch",
    icon: "logos:pytorch-icon",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  
  
  {
    name: "Tensorflow",
    icon: "logos:tensorflow",
  },
  {
    name: "Hugging Face",
    icon: "logos:hugging-face-icon",
  },
  
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "Numpy",
    icon: "logos:numpy",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  
  {
    name: "Javascript",
    icon: "logos:javascript",
  },

  
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  
  {
    name: "Pandas",
    icon: "logos:pandas-icon",
  },
  {
    name: "FastAPI",
    icon: "logos:fastapi-icon",
  },
  {
    name: "C++",
    icon: "logos:c-plusplus",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    
  },
  {
    name: "Prompt Eng",
    icon: "logos:openai-icon",
    
  },
  {
    name: "tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Hadoop",
    icon: "logos:hadoop",
  },
  
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  
] as const;
