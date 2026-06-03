import { motion } from "framer-motion";
import { Github, Activity, FileText, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Bike Rental Demand Prediction",
    icon: <Activity className="w-6 h-6 text-blue-400" />,
    desc: "Built and deployed an interactive ML system to predict real-time bike demand using historical usage patterns and detailed weather/seasonality data.",
    highlights: [
      "Reduced RMSE by ~18% by engineering 22 weather-seasonality features and tuning Decision Tree, Random Forest & Gradient Boosting via RandomizedSearchCV.",
      "Preprocessed 17,000+ records, resolving 340+ outliers/missing values to improve dataset completeness from 83% to 100%.",
      "Deployed as a live Streamlit app with REST API integration for real-time predictions."
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit", "REST API"],
    github: "https://github.com/beingnilesh07/Bike_Rental_Sharing_Demand"
  },
  {
    title: "Walmart Sales Prediction & Analysis",
    icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
    desc: "End-to-end ML pipeline analyzing Walmart sales data across 45 store locations to uncover key business drivers and support retail strategy decisions.",
    highlights: [
      "Improved model performance from R² 0.92 (Linear Regression) to 0.97 using XGBoost with feature importance analysis.",
      "Built full ML pipeline: EDA, feature engineering, model comparison, and reporting aligned with transaction advisory workflows.",
      "Produced visual dashboards translating model outputs into actionable business insights."
    ],
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    github: "https://github.com/beingnilesh07/Walmart_Sales_Prediction_And_Analysis"
  },
  {
    title: "NLP-Driven Resume Classification",
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    desc: "Advanced NLP system that automatically classifies resumes into job categories with 92%+ accuracy, complete with a Streamlit app for live predictions.",
    highlights: [
      "Achieved 92%+ accuracy across 4 job categories using TF-IDF + SVM on 70+ resumes; built a Streamlit app showing predicted category and confidence score.",
      "Reduced preprocessing pipeline from 140 to 35 lines using SpaCy, cutting runtime by ~40% for scalable deployment.",
      "Explored LLM API augmentation for contextual resume parsing beyond keyword matching."
    ],
    tags: ["Python", "SpaCy", "TF-IDF", "SVM", "NLP", "LLM APIs", "Streamlit"],
    github: "https://github.com/beingnilesh07/NLP_Driven_Resume_Classification_System"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Showcasing end-to-end ML solutions — from data wrangling and modeling to deployment.
            </p>
          </div>
          <a
            href="https://github.com/beingnilesh07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-indigo-400 transition-colors font-medium whitespace-nowrap"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-secondary border border-border">
                      {project.icon}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-snug">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-5 text-sm">{project.desc}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 leading-none shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-background text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
