import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const links = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "biladinilesh3112@gmail.com",
      href: "mailto:biladinilesh3112@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9765264227",
      href: "tel:+919765264227"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/nilesh-biladi",
      href: "https://www.linkedin.com/in/nilesh-biladi-291b27200/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/beingnilesh07",
      href: "https://github.com/beingnilesh07"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pune, Maharashtra",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" || link.label === "GitHub" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`block group ${link.label === "Location" ? "pointer-events-none cursor-default" : ""}`}
            >
              <Card className="h-full bg-secondary/20 hover:bg-secondary/60 border-border/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/5">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 mb-3 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                    {link.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{link.label}</h3>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors break-all">
                    {link.value}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
