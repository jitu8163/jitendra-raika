export const personalInfo = {
  name: "Jitendra Raika",
  tagline: "AI / ML Engineer",
  location: "Jaipur, Rajasthan, India",
  email: "jituraika8163@gmail.com",
  github: "https://github.com/jitu8163",
  linkedin: "https://www.linkedin.com/in/jituraika816",
  summary:
    "AI/ML Engineer with 1+ year of hands-on experience in building AI-driven applications, including AI chatbots and real-time AI calling agents using Python, OpenAI APIs, Twilio, and LiveKit. Strong foundation in Machine Learning, Deep Learning, NLP, and Generative AI, with practical experience in LLM integration, prompt engineering, and end-to-end pipeline development. Proficient in data analysis and model building using Pandas, NumPy, Scikit-learn, and TensorFlow, with additional expertise in EDA and data visualization. Focused on designing efficient systems with automation, performance optimization, and low-latency responses, seeking an AI/ML Engineer role to deliver impactful AI solutions.",
};

export const skills = {
  "Programming Languages": ["Python", "SQL", "JavaScript (basic)"],
  "Machine Learning & AI": [
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "CNNs",
    "Feature Engineering",
    "Hyperparameter Tuning",
    "Model Validation",
    "Cross-Validation",
  ],
  "Generative AI & LLM Systems": [
    "RAG",
    "LLMs",
    "LangChain",
    "Transformers",
    "Embeddings",
    "Semantic Search",
    "Reranking",
    "Prompt Engineering",
    "Intent Routing",
    "GPT-4",
    "Llama 2",
    "Mistral",
    "Groq",
    "STT",
    "TTS",
    "NLP",
  ],
  "Vector Databases & Search": [
    "Qdrant",
    "MongoDB",
    "Semantic Retrieval",
    "Chunking",
    "Sentence-Transformers",
  ],
  "Frameworks & APIs": [
    "FastAPI",
    "RestAPI",
    "Hugging Face",
    "Twilio",
    "LiveKit",
    "SarvamAI",
    "Deepgram",
  ],
  "Data Analysis & Visualization": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI",
  ],
  "Developer Tools": ["Git", "GitLab", "Jupyter Notebook", "VS Code"],
  "Cloud Platforms": ["Google Colab"],
};

export const experience = [
  {
    role: "AI/ML Engineer",
    company: "Telepathy Infotech Pvt. Ltd",
    location: "Jaipur, Rajasthan",
    period: "March 2025 – Present",
    achievements: [
      "Developed a production-ready RAG chatbot using GPT-4 and Llama 2 LLMs with Qdrant vector database, enabling semantic search over MongoDB data with sub-second retrieval latency.",
      "Built FastAPI backend microservices with intent routing for analytics queries and LLM inference, improving API response accuracy by 30%.",
      "Implemented advanced prompt engineering and structured JSON pipelines, reducing LLM hallucination rate and improving response reliability by 25%.",
      "Designed an AI Calling Agent using Twilio, LiveKit, SarvamAI, and Deepgram that autonomously collects lead data and schedules site visits via phone call.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Maxgen Technologies Pvt. Ltd",
    location: "Ahmedabad, Gujarat",
    period: "July 2024 – January 2025",
    achievements: [
      "Improved ML model accuracy by 15% through systematic feature selection, hyperparameter tuning, and cross-validation using Scikit-learn and TensorFlow.",
      "Designed forecasting and customer segmentation models that directly supported 3 key business decisions in product planning.",
      "Built Power BI dashboards integrated with scalable Python data pipelines, reducing reporting time by 40%.",
      "Automated data ingestion and preprocessing workflows, cutting manual data preparation effort by 50%.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "TechieNest Pvt. Ltd",
    location: "Jaipur, Rajasthan",
    period: "July 2023 – September 2023",
    achievements: [
      "Built customer churn prediction models achieving AUC 0.85+ using Scikit-learn, enabling targeted retention campaigns.",
      "Developed house price regression models using feature engineering and ensemble methods, achieving RMSE reduction of 18%.",
      "Automated attendance tracking system using Python, reducing manual tracking effort by 60% across 200+ students.",
    ],
  },
];

export const projects = [
  {
    name: "AI Calling Agent",
    description:
      "Built an autonomous AI agent that connects with leads via phone, collects structured data, and schedules site visits without human intervention. Integrated real-time STT (Deepgram) and TTS (SarvamAI) with LLM reasoning (Groq) for natural conversation flow.",
    tech: ["Twilio", "LiveKit", "SarvamAI", "Deepgram", "Groq", "MongoDB"],
  },
  {
    name: "Custom RAG Knowledge Assistant",
    description:
      "Built an end-to-end RAG pipeline using Qdrant vector database and Sentence-Transformers for accurate semantic knowledge retrieval. Implemented smart chunking, embedding strategies, and reranking for high precision recall in document Q&A tasks.",
    tech: ["Qdrant", "Sentence-Transformers", "LangChain", "Python"],
  },
  {
    name: "Potato Disease Detection – CNN",
    description:
      "Achieved 92% classification accuracy using a custom CNN model with data augmentation and transfer learning techniques. Designed an efficient preprocessing and inference pipeline suitable for real-time deployment on edge devices.",
    tech: ["TensorFlow", "Keras", "CNN", "OpenCV"],
  },
  {
    name: "College Policy Chatbot (RAG)",
    description:
      "Developed a context-aware chatbot answering college policy queries via document embedding and semantic retrieval. Reduced average query resolution time by providing instant, accurate policy answers accessible 24/7.",
    tech: ["Vector Search", "LLM Generation", "FastAPI", "MongoDB"],
  },
  {
    name: "Customer Churn Prediction",
    description:
      "Built ML classification models achieving AUC 0.88, identifying high-risk customers with 85%+ precision. Performed in-depth feature engineering and preprocessing to generate actionable customer retention insights.",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "SBCET, Jaipur",
    period: "2021 – 2025",
    score: "SGPA: 8.2",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Prince Residential Sr. Sec. School, Jaipur",
    period: "2020 – 2021",
    score: "95.80%",
  },
  {
    degree: "Secondary (Class X)",
    institution: "Prince Residential Sr. Sec. School, Jaipur",
    period: "2018 – 2019",
    score: "87.50%",
  },
];

export const certifications = [
  "Accenture Data Analytics & Visualization — Forage (Virtual Experience)",
  "Tata Data Visualisation Simulation — Forage (Virtual Experience)",
  "Data Science — Acmegrade",
  "AI-ML Certification — TechieNest Pvt. Ltd",
  "Python & TensorFlow for Machine Learning — Udemy",
  "Common Internship Test — Internship Studio",
  "Group Discussion & Presentation Skills — TCS iON",
];

export const languages = [
  { name: "English", level: "C1 – Advanced" },
  { name: "Hindi", level: "C2 – Native" },
];
