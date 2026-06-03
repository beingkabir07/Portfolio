import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "RCPET's Institute of Management Research and Development, Shirpur",
    duration: "2023 – 2025",
    grade: "CGPA: 8.08 / 10"
  },
  {
    degree: "Bachelor of Science (Computer)",
    institution: "R. C. Patel Arts, Commerce and Science College, Shirpur",
    duration: "2020 – 2023",
    grade: "CGPA: 9.3 / 10"
  }
];

const CERTIFICATIONS = [
  {
    title: "Master's Program in Data Science",
    issuer: "Futureskills Prime & NASSCOM",
    year: "2026"
  },
  {
    title: "Data Science Course Completion Certificate",
    issuer: "ExcelR",
    year: "2025"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    year: "2024"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg">Academic background and professional credentials.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="relative border-l border-border ml-2 space-y-0">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <Card className="bg-secondary/10 border-border/50">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-foreground mb-1 leading-snug">{edu.degree}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{edu.duration}</span>
                        <span className="font-semibold text-foreground">{edu.grade}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="bg-secondary/10 border-border/50 hover:bg-secondary/30 transition-colors">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm leading-snug mb-1">{cert.title}</h4>
                        <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
