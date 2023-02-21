import css from "../Assets/css.png";
import python from "../Assets/python.png";
import javascript from "../Assets/javascript.png";
import html from "../Assets/html.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import sass from "../Assets/sass.png";
import linux from "../Assets/linux.png";
import bootstrap from "../Assets/bootstrap.png";
import postgresql from "../Assets/postgresql.png";
import git from "../Assets/git.png";
import github from "../Assets/github.png";
import scandiweb from "../Assets/preview.gif";
import tourPlaces from "../Assets/preview-tour.gif";
import languages from "../Assets/preview-language.gif";
import graphql from "../Assets/graphql.png";
import apollographql from "../Assets/apollographql.png";

export const data = [
  {
    name: "Javascript",
    img: javascript,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "SASS",
    img: sass,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    name: "Linux",
    img: linux,
  },
  {
    name: "PostgreSQL",
    img: postgresql,
  },
  {
    name: "Git",
    img: git,
  },
  {
    name: "Github",
    img: github,
  },
  {
    name: "GraphQL",
    img: graphql,
  },
  {
    name: "ApolloGraphql",
    img: apollographql,
  },
];

export const skills =
  "Analytical Thinking | Problem-Solving Abilities | Self-Motivated | Strong Communication | Project Management | Planning | Time Management | Adaptability | Continuous Learning | Collaboration & Teamwork | Multi-Task Management | Fast Learner | Resilience | Computational Thinking | Curious Approach | Self Discipline | Detailer | Open to Innovation".split(
    " |"
  );

export const experiences = [
  {
    year: 2020,
    area: "Agarta Natural Cosmetics",
    title: "Intern Engineer",
    definition:
      "Development in the production process and control of the machines. Fast end effective solutions under critical situations.",
  },
  {
    year: 2022,
    area: "Clarusway",
    title: "Front End Developer Trainee",
    definition:
      "Worked in an agile team of 7 members and provided responsive projects. Used SCRUM & Agile methodologies and JIRA while working on individual & group projects.",
  },
];
export const education = [
  {
    year: 2018,
    area: "Middle East Technical University",
    title: "Chemical Engineering",
    definition:
      "Engineering discipline gained in an international area. Main significany of the department is multidiscipliner approach of it. Important effect on problem solving with different perspectives. Academic and social relations shaped the future carrier.",
  },
  {
    year: 2022,
    area: "University of Economics and Human Science",
    title: "Computer Engineering",
    definition:
      "High motivate to have an academic career in Computer Science. Beside the self-working, a professional education and an academic careeer in main area.",
  },
];

export const projects = [
  {
    id: scandiweb,
    title: "E-Commerce Site",
    navto: "e-commerce",
    explanation:
      "In this project, the interface of an e-commerce website was designed using React. The user was given the opportunity to see product details, preview the selected products with the mini cart structure, and complete the order with the cart structure. Data entry was done using GraphQL endpoint. Project details are available in the Github Repository.",
    usedTools: [
      [react, "React"],
      [redux, "Redux"],
      [html, "HTML"],
      [css, "CSS"],
      [javascript, "JavaScript"],
      [graphql, "GraphQL"],
      [apollographql, "Apollo"],
    ],
    sourceCode: "https://github.com/KemalDurukanMERT/Scandiweb-Test-Case",
    liveServer: "",
  },
  {
    id: tourPlaces,
    title: "Tour Places",
    navto: "tour-places",
    explanation: "In this project, the goal is to make a one-page website that supports variable card structures in Bootstrap format with images and descriptions.",
    usedTools: [
      [react, "React"],
      [html, "HTML"],
      [css, "CSS"],
      [javascript, "JavaScript"],
      [bootstrap, "Bootstrap"],
    ],
    sourceCode: "https://github.com/KemalDurukanMERT/Tour-Projects",
    liveServer: "https://mellifluous-swan-797be0.netlify.app/",
  },
  {
    id: languages,
    title: "Language Card",
    navto: "language-cards",
    explanation: "In this project, the goal is to make a information page about programing languages with fetching data from an open source API.",
    usedTools: [
      [react, "React"],
      [html, "HTML"],
      [css, "CSS"],
      [javascript, "JavaScript"],
      [bootstrap, "Bootstrap"],
    ],
    sourceCode: "https://github.com/KemalDurukanMERT/Language-Cards",
    liveServer: "https://cozy-scone-6e106b.netlify.app/",
  },
];
