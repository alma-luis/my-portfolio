// Simulate posts
const posts = [
  {title: "Reflection 1", content: "I learned about GitHub Pages today."},
  {title: "Project Idea", content: "Start a portfolio that shows all my projects."}
];

const postsDiv = document.getElementById("posts");

posts.forEach(post => {
  const div = document.createElement("div");
  div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><hr>`;
  postsDiv.appendChild(div);
});
