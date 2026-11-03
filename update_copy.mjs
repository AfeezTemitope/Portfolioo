import fs from "node:fs";

const aboutFile = "src/components/AboutMe.tsx";
const headerFile = "src/components/Header.tsx";

const about = fs.readFileSync(aboutFile, "utf8");
const header = fs.readFileSync(headerFile, "utf8");

// 1. Remove the "4+ years" subtitle under "About Me"
const subtitle =
  /\s*<motion\.p className="text-lg text-white\/60 max-w-2xl mx-auto">\s*Software engineer with 4\+ years of experience building scalable applications\s*<\/motion\.p>/;

// 2. Rewrite the hero blurb in the Header
const blurb = /<p className="text-lg text-white\/70 max-w-2xl">[\s\S]*?<\/p>/;
const newBlurb =
  '<p className="text-lg text-white/70 max-w-2xl">\n' +
  "              Full Stack Software Engineer building production applications across\n" +
  "              edtech, healthcare, and fintech. React, Next.js, and TypeScript on the\n" +
  "              front end; Node.js, Django, FastAPI, and Spring Boot on the back. Now\n" +
  "              focused on AI-integrated products and co-founding Klassrun.\n" +
  "            </p>";

if (!subtitle.test(about)) {
  console.error("Could not find the About Me subtitle. No changes made.");
  process.exit(1);
}
if (!blurb.test(header)) {
  console.error("Could not find the Header blurb. No changes made.");
  process.exit(1);
}

fs.writeFileSync(aboutFile, about.replace(subtitle, ""));
fs.writeFileSync(headerFile, header.replace(blurb, newBlurb));
console.log("Done: removed About Me subtitle and updated Header blurb.");
