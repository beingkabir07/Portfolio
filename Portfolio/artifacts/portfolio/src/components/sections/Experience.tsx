import { motion } from "framer-motion";
import { Briefcase, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey in the data space.</p>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
          >
            <div className="absolute left-[-21px] top-1 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)] z-10">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>

            <Card className="border-border/50 bg-card hover:border-border transition-colors">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">Data Scientist Intern</h3>
                    <p className="text-lg text-primary font-medium mt-1">AI-variant</p>
                    <a
                      href="https://github.com/beingnilesh07/Bike_Rental_Sharing_Demand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span className="group-hover:text-primary transition-colors font-medium">Bike Rental Demand Prediction</span>
                    </a>
                  </div>
                  <div className="inline-flex py-1 px-3 rounded-full bg-secondary text-sm font-medium text-muted-foreground whitespace-nowrap self-start sm:self-auto">
                    Sep 2025 – March 2026
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5 leading-none shrink-0">•</span>
                    <span>Reduced RMSE by ~18% on the Bike Rental Demand Prediction project by engineering 22 weather-seasonality features and tuning Decision Tree, Random Forest &amp; Gradient Boosting models via RandomizedSearchCV.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5 leading-none shrink-0">•</span>
                    <span>Built and deployed an interactive Streamlit app for real-time bike demand prediction with REST API integration, enabling data-driven decisions for daily operations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5 leading-none shrink-0">•</span>
                    <span>Preprocessed 17,000+ records handling 340+ outliers/missing values, improving dataset completeness from 83% to 100% and ensuring reliable model inputs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5 leading-none shrink-0">•</span>
                    <span>Gained hands-on experience across the full ML lifecycle — from data ingestion, EDA, and feature engineering to model training, evaluation, and deployment.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit", "Git/GitHub"].map(tag => (
                    <Badge key={tag} variant="outline" className="bg-background text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
