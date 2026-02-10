import "./style.css";

const sections = [
  "header",
  "banner",
  "about",
  "download",
  "qna",
  "download2",
  "apply",
  "footer",
];

async function loadSection(name) {
  const el = document.getElementById(name);
  const res = await fetch(`./src/sections/${name}.html`);
  el.innerHTML = await res.text();
}

sections.forEach(loadSection);
