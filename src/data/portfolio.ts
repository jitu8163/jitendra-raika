export const personalInfo = {
  name: "Jitendra Raika",
  tagline: "AI/ML Engineer | Data Scientist",
  location: "Jaipur, Rajasthan",
  email: "jitendraraika72@gmail.com",
  linkedin: "https://www.linkedin.com/in/jitendra-raika",
  portfolio: "https://jitendraraika.netlify.app",
  summary:
    "Dynamic and results-driven AI/ML professional with hands-on experience in building intelligent systems, deploying NLP and computer vision models, and working with large language models. Proficient in Python, TensorFlow, and cloud platforms. Skilled in developing scalable data pipelines, fine-tuning transformer models, and designing user-centric AI solutions. Eager to apply cutting-edge AI technologies to solve complex, real-world challenges and drive meaningful innovation.",
};

export const skills = {
  Programming: ["Python", "SQL", "JavaScript"],
  Databases: ["MySQL", "MongoDB", "ChromaDB", "Pinecone"],
  "Machine Learning": [
    "Supervised & Unsupervised Learning",
    "CNNs",
    "RNNs",
    "Transformers",
    "Reinforcement Learning",
    "Transfer Learning",
    "Model Evaluation",
    "Fine-Tuning (LoRA, QLoRA)",
  ],
  "Data Analysis": [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Feature Engineering",
    "EDA",
    "Statistical Analysis",
  ],
  Visualization: ["Matplotlib", "Seaborn", "Plotly", "Power BI"],
  "AI Architectures": [
    "RAG",
    "Agentic AI",
    "LLM Pipelines",
    "Prompt Engineering",
    "LangChain",
    "CrewAI",
    "LlamaIndex",
  ],
  Frameworks: [
    "TensorFlow",
    "Keras",
    "PyTorch",
    "FastAPI",
    "Flask",
    "Streamlit",
    "Gradio",
    "Hugging Face",
  ],
  Tools: [
    "Git/GitHub",
    "Docker",
    "AWS (EC2, S3, SageMaker)",
    "Google Cloud (Vertex AI)",
    "MLflow",
    "Weights & Biases",
    "Jupyter",
    "VS Code",
  ],
  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
  ],
};

export const experience = [
  {
    role: "AI/ML Engineer Intern",
    company: "Telepathy Infotech",
    location: "Jaipur",
    period: "Feb 2025 – Present",
    achievements: [
      "Building AI-powered multi-agent systems using CrewAI and LangChain for automated workflows",
      "Developed agentic RAG pipelines for domain-specific Q&A with dynamic retrieval strategies",
      "Integrating LLMs with external APIs, tools, and structured planning agents",
      "Collaborating on prompt engineering, tool-use design, and evaluation of agent performance",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Maxgen Technologies",
    location: "Pune (Remote)",
    period: "Aug 2024 – Oct 2024",
    achievements: [
      "Developed ML models for customer churn prediction, improving retention targeting by 20%",
      "Performed feature engineering and EDA on large-scale datasets to enhance model accuracy",
      "Applied ensemble methods, hyperparameter tuning, and cross-validation for robust evaluation",
    ],
  },
  {
    role: "AI-ML Intern",
    company: "TechieNest",
    location: "Jaipur",
    period: "Jul 2024 – Aug 2024",
    achievements: [
      "Built and deployed deep learning models for image classification using CNNs and Transfer Learning",
      "Designed real-time AI applications using Streamlit and Flask for inference and visualization",
      "Gained hands-on experience with data augmentation, model fine-tuning, and TensorFlow Serving",
    ],
  },
];

export const projects = [
  {
    name: "RAG Knowledge Assistant",
    description:
      "Built a Retrieval-Augmented Generation system using LangChain, ChromaDB, and OpenAI for context-aware Q&A over custom documents. Integrated chunking, embedding, and re-ranking strategies for accuracy.",
    tech: ["LangChain", "ChromaDB", "OpenAI", "Python"],
  },
  {
    name: "College Policy Chatbot",
    description:
      "Developed an AI chatbot to answer policy-related queries using RAG with LangChain and Streamlit. Deployed with a responsive UI for students and staff to interact with college regulations efficiently.",
    tech: ["LangChain", "Streamlit", "RAG", "Python"],
  },
  {
    name: "Potato Disease Detection",
    description:
      "Created a CNN-based image classifier using TensorFlow to detect potato leaf diseases (Early Blight, Late Blight). Deployed via FastAPI + React with 95%+ accuracy.",
    tech: ["TensorFlow", "FastAPI", "React", "CNN"],
  },
  {
    name: "JARVIS Virtual Assistant",
    description:
      "Built a voice-activated virtual assistant using Python, capable of executing system commands, performing web searches, and answering general knowledge questions using NLP and speech recognition.",
    tech: ["Python", "NLP", "Speech Recognition"],
  },
  {
    name: "Customer Churn Prediction",
    description:
      "Designed a machine learning pipeline for predicting customer churn using classification algorithms (Random Forest, XGBoost). Performed EDA and feature selection to achieve 89% accuracy.",
    tech: ["Scikit-learn", "XGBoost", "Pandas", "EDA"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Poornima College of Engineering, Jaipur",
    period: "2022 – 2026",
    score: "SGPA: 8.2",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Seth Gyaniram Bansidhar Podar College, Nawalgarh",
    period: "2020 – 2022",
    score: "95.80%",
  },
  {
    degree: "Senior Secondary (X)",
    institution: "Adarsh Vidya Mandir, Nawalgarh",
    period: "2020",
    score: "87.50%",
  },
];

export const certifications = [
  "Programming in Python – IIT Kharagpur (NPTEL)",
  "Supervised Machine Learning – Stanford (Coursera)",
  "Deep Learning Specialization – DeepLearning.AI (Coursera)",
  "Natural Language Processing – DeepLearning.AI (Coursera)",
  "Data Science Professional Certificate – IBM (Coursera)",
  "Cloud Computing – NPTEL",
  "Generative AI with LLMs – AWS & DeepLearning.AI",
];

export const languages = [
  { name: "English", level: "C1 – Advanced" },
  { name: "Hindi", level: "C2 – Native" },
];
