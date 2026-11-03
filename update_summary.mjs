import fs from "node:fs";

const file = "src/components/AboutMe.tsx";
const src = fs.readFileSync(file, "utf8");

const summary =
  "Full Stack Software Engineer building and maintaining production applications across edtech, healthcare, and fintech, following intensive software engineering training at Semicolon Africa; now focused on AI-integrated products and applied data science. Frontend in React, Next.js, and TypeScript; backend depth in Node.js/Express, Django REST Framework, FastAPI, and Spring Boot on PostgreSQL, Redis, and Prisma. Comfortable owning products end to end \u2014 schema design, REST APIs, payments, LLM integration, deployment, and CI/CD \u2014 and collaborating with cross-functional teams in Agile environments, and mentoring early-stage developers. Currently co-founding Klassrun, an AI-powered school management SaaS, building LLM features and learning analytics on live student performance data.";

const newParagraph =
  '<p className="text-white/90 leading-relaxed">\n' +
  "                                " + summary + "\n" +
  "                            </p>";

const startCard = src.indexOf('rounded-2xl p-8 space-y-6">');
const startP = src.indexOf('<p className="text-white/90 leading-relaxed">', startCard);
const marker = src.indexOf("{/* Professional Experience */}");
const endP = src.lastIndexOf("</p>", marker) + 4;

if (startCard < 0 || startP < 0 || marker < 0 || endP < 4 || startP > endP) {
  console.error("Could not find the summary block in " + file + ". No changes made.");
  process.exit(1);
}

fs.writeFileSync(file, src.slice(0, startP) + newParagraph + src.slice(endP));
console.log("Professional summary updated in " + file);
