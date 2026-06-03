import { motion } from "framer-motion";
import { BrainCircuit, Database, Code2, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const cards = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
      title: "AI & ML",
      desc: "Architecting end-to-end ML pipelines and deploying LLM-powered applications using modern generative AI techniques."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Data Science",
      desc: "Extracting actionable insights from complex datasets using statistical analysis and advanced predictive modeling."
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: "Engineering",
      desc: "Building robust ETL pipelines, REST APIs, and interactive Streamlit applications with clean Python and SQL."
    },
    {
      icon: <Layers className="w-8 h-8 text-green-400" />,
      title: "Full ML Lifecycle",
      desc: "Hands-on experience across EDA, feature engineering, model training, evaluation, and production deployment."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a results-oriented Data Scientist with hands-on experience in Python, ML, NLP, and generative AI. I specialize in translating complex business problems into data-driven solutions — building everything from predictive models to end-to-end ML pipelines.
              </p>
              <p>
                With strong foundations in <strong className="text-foreground">Python, SQL, and Machine Learning</strong>, I've worked across the full ML lifecycle: from exploratory data analysis and feature engineering, to model training, evaluation, and deployment via Streamlit apps and REST APIs.
              </p>
              <p>
                I'm also experienced in <strong className="text-foreground">statistical analysis, ETL pipelines, and data visualization</strong> using tools like Tableau and Seaborn, and I'm familiar with <strong className="text-foreground">AWS and LLM APIs</strong>. I thrive at communicating insights to cross-functional stakeholders.
              </p>
              <p>
                Currently focused on the rapidly evolving field of Generative AI — designing <strong className="text-foreground">LLM-powered systems</strong> utilizing RAG, semantic search, and modern AI techniques to solve real-world challenges.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="w-full lg:w-[480px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-secondary/20 border-border/50 hover:bg-secondary/40 transition-colors h-full">
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="p-2.5 bg-background rounded-xl border border-border/50 shadow-sm w-fit">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display mb-1">{card.title}</h4>
                      <p className="text-sm text-muted-foreground">{card.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
