"use client";

import React from "react";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Sparkles,
  Compass,
  Code2,
  Cpu,
  Workflow,
  CheckCircle2,
  Target,
} from "lucide-react";

const roadmap = [
  {
    phase: "1. Frontend Foundations",
    focus: "HTML5, CSS3, Responsive Design, Flexbox & Grid",
    outcome: "Clean, responsive static web layouts",
  },
  {
    phase: "2. JavaScript Mastery",
    focus: "ES6+, DOM, Events, Async JS, Fetch/APIs, Closures",
    outcome: "Interactive, dynamic, data-driven web apps",
  },
  {
    phase: "3. React Ecosystem",
    focus: "Components, Props, State, Custom Hooks, Routing",
    outcome: "Modern single-page applications (SPAs)",
  },
  {
    phase: "4. Backend & REST APIs",
    focus: "Node.js, Express.js, Middleware, Auth & Architecture",
    outcome: "Secure and performant server-side services",
  },
  {
    phase: "5. Database & Modeling",
    focus: "MongoDB, Mongoose, Schemas, CRUD & Aggregations",
    outcome: "Scalable data persistence & modeling",
  },
  {
    phase: "6. Full-Stack Integration",
    focus: "MERN Stack integration, State, Deployment & CI/CD",
    outcome: "Production-ready, deployed full-stack products",
  },
];

const strengths = [
  {
    title: "Practical Learner",
    desc: "I learn best by building real, functioning applications.",
  },
  {
    title: "Problem-Solving Mindset",
    desc: "Breaking down complex problems into clean, structured steps.",
  },
  {
    title: "Product-Oriented",
    desc: "Focused on creating useful, user-friendly digital tools.",
  },
  {
    title: "Continuous Improvement",
    desc: "Refactoring, testing, and sharpening code quality over time.",
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen max-w-6xl mx-auto px-4 py-20">
      <SectionHeader
        id="about"
        title="About Me"
        desc="Full-Stack Developer in the Making — Building, Learning & Improving."
        className="mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Bio & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Sparkles className="h-5 w-5" />
                <CardTitle className="text-xl">Who I Am</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m a Computer Science &amp; Engineering student specializing in{" "}
                <span className="text-foreground font-medium">
                  Artificial Intelligence
                </span>
                , currently in my 2nd year at{" "}
                <span className="text-foreground font-medium">
                  GIFT Autonomous College, Bhubaneswar
                </span>
                .
              </p>
              <p>
                From a young age of curiosity about how software works, I&apos;ve grown
                into someone who genuinely enjoys building: taking an idea, breaking
                it into parts, writing the code, fixing what breaks, and shipping
                something that works.
              </p>
              <p>
                My focus right now is{" "}
                <span className="text-foreground font-medium">
                  Full-Stack Web Development
                </span>{" "}
                (strengthening HTML, CSS, JavaScript, and progressing toward the
                MERN stack) while practicing{" "}
                <span className="text-foreground font-medium">
                  Data Structures &amp; Algorithms in Java
                </span>
                .
              </p>

              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <Badge variant="secondary" className="px-3 py-1">
                    <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
                    B.Tech CSE (AI) · 2nd Year
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    📍 Bhubaneswar, Odisha
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Target: Full-Stack Developer
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Philosophy Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Workflow className="h-5 w-5" />
                <CardTitle className="text-xl">Learning Philosophy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-secondary/30 rounded-lg border border-border/50 text-xs md:text-sm font-mono">
                <span className="font-semibold text-primary">Learn</span>
                <span>→</span>
                <span className="font-semibold text-primary">Practice</span>
                <span>→</span>
                <span className="font-semibold text-primary">Build</span>
                <span>→</span>
                <span className="font-semibold text-primary">Debug</span>
                <span>→</span>
                <span className="font-semibold text-primary">Improve</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Tutorials are a starting point, not the destination. Every concept I learn,
                I apply in a real, working project to understand how pieces connect together.
              </p>
            </CardContent>
          </Card>

          {/* Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strengths.map((s, idx) => (
              <Card key={idx} className="bg-card/60 border-border p-4">
                <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {s.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5">{s.desc}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Roadmap & Career Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex flex-col gap-6"
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border flex-1">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Compass className="h-5 w-5" />
                <CardTitle className="text-xl">Learning Roadmap</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {roadmap.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-secondary/20 border border-border/40 hover:border-primary/40 transition-colors"
                  >
                    <div className="font-medium text-xs md:text-sm text-foreground">
                      {item.phase}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.focus}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 font-medium text-xs text-primary mb-1">
                  <Target className="w-4 h-4" />
                  Career Goal &amp; Vision
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To become a strong Full-Stack Developer capable of taking an idea,
                  understanding the problem, designing the solution, and shipping complete,
                  user-focused web applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
