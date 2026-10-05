const config = {
  title: "Biswajit Biswal | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Biswajit Biswal, a Computer Science & Engineering student specializing in AI and Full-Stack Web Development at GIFT Autonomous College, Bhubaneswar. Building practical, interactive web applications with React, Node.js, and Java DSA.",
    short:
      "Portfolio of Biswajit Biswal — Full-Stack Developer in the making, building practical, scalable web applications.",
  },
  keywords: [
    "Biswajit Biswal",
    "Biswajit",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Java",
    "DSA",
    "JavaScript",
    "GIFT Autonomous College",
    "Bhubaneswar",
    "Odisha",
  ],
  author: "Biswajit Biswal",
  email: "biswajitbiswal@example.com",
  site: "https://biswajitbiswal.dev",

  // for github stars button
  githubUsername: "biswajitbiswal-in",
  githubRepo: "MyPortfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/biswajitbiswal-in",
  },
};
export { config };

