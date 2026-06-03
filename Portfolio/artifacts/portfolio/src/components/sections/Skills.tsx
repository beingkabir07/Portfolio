import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "SQL"]
  },
  {
    title: "ML / AI",
    skills: [
      "Regression", "Classification", "Time-Series Analysis", "NLP",
      "Neural Networks", "Transformers", "Generative AI", "Feature Engineering", "EDA"
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "SciPy", "TensorFlow", "Keras", "SpaCy", "XGBoost"]
  },
  {
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"]
  },
  {
    title: "Data Engineering",
    skills: ["Data Wrangling", "ETL Pipelines", "EDA", "Feature Engineering", "Statistical Analysis"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter Notebook", "Google Colab", "VS Code", "MySQL", "Git & GitHub", "Streamlit", "AWS"]
  },
  {
    title: "LLM & Generative AI",
    highlight: true,
    skills: [
      "Large Language Models (LLMs)", "Transformers", "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)", "LangChain", "Vector Databases (FAISS / Chroma)",
      "Embeddings", "Semantic Search", "LLM APIs", "LLM Application Development"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical toolkit, with a strong emphasis on modern AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={category.highlight ? "md:col-span-2 lg:col-span-3" : ""}
            >
              {category.highlight ? (
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full group">
                  <div className="absolute inset-0 blur-md bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <Card className="relative bg-card/95 backdrop-blur-sm h-full border-none rounded-[15px]">
                    <CardHeader>
                      <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="highlight" className="text-sm py-1.5 px-4">
                          {skill}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="h-full bg-secondary/5 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
