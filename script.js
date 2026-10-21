const posts=[
 {title:"The art of noticing what you usually miss",category:"Everyday",date:"Oct 12, 2026",excerpt:"A small shift in attention can turn an ordinary day into a collection of discoveries.",bg:"#e8d8c4",shape:"#d7b34f",featured:true},
 {title:"Why making things badly is a good place to start",category:"Creativity",date:"Oct 08, 2026",excerpt:"Let curiosity lead before perfection gets a chance to interrupt.",bg:"#d6d9c9",shape:"#5b7567",featured:true},
 {title:"The quiet influence of the places we gather",category:"Culture",date:"Oct 03, 2026",excerpt:"The spaces around us shape the conversations we have and the ideas we share.",bg:"#ead8c8",shape:"#d5a187",featured:true},
 {title:"A beginner's guide to keeping a commonplace book",category:"Ideas",date:"Sep 28, 2026",excerpt:"A simple home for quotes, questions, observations, and half-formed thoughts.",bg:"#e2d9e5",shape:"#9e9dbe"},
 {title:"Can a slower routine make room for better ideas?",category:"Everyday",date:"Sep 21, 2026",excerpt:"A few gentle ways to create breathing space in a busy week.",bg:"#e8d8c4",shape:"#d7b34f"},
 {title:"The joy of learning something with no end goal",category:"Culture",date:"Sep 15, 2026",excerpt:"Not every interest needs to become a skill, a side hustle, or a plan.",bg:"#ead8c8",shape:"#d5a187"}
];

const featured = document.querySelector("#featured");
const latest = document.querySelector("#latest");

function escapeHTML(value) {
  return String(value).replace(/[&<>\"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&#39;"
  })[character]);
}

function createPostCard(post) {
  return `
    <article class="post-card">
      <div class="card-art" style="--bg:${post.bg};--shape:${post.shape}" aria-hidden="true"></div>
      <div class="meta"><b>${escapeHTML(post.category)}</b> · ${escapeHTML(post.date)}</div>
      <h3>${escapeHTML(post.title)}</h3>
      <p>${escapeHTML(post.excerpt)}</p>
      <a class="read" href="#contact">Read story ↗</a>
    </article>
  `;
}

function createLatestPost(post) {
  return `
    <article>
      <div class="meta"><b>${escapeHTML(post.category)}</b> · ${escapeHTML(post.date)}</div>
      <h3>${escapeHTML(post.title)}</h3>
      <p>${escapeHTML(post.excerpt)}</p>
    </article>
  `;
}

if (featured) {
  featured.innerHTML = posts.filter(post => post.featured).map(createPostCard).join("");
}

if (latest) {
  latest.innerHTML = posts.filter(post => !post.featured).map(createLatestPost).join("");
}

// Mobile navigation menu
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Newsletter demo: this does NOT send or store email addresses.
const newsletterForm = document.querySelector("#newsletter");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();
    const feedback = document.querySelector("#feedback");
    if (feedback) {
      feedback.textContent = "Thanks for your interest! This is a demo only; no email was sent or saved.";
    }
    newsletterForm.reset();
  });
}

// Automatically show the current year in the footer.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
