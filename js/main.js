// Load existing posts from localStorage
let posts = JSON.parse(localStorage.getItem("journalPosts")) || [];

const postsDiv = document.getElementById("posts");
const submitBtn = document.getElementById("submitBtn");
const postContent = document.getElementById("postContent");

// Function to display posts
function displayPosts() {
  postsDiv.innerHTML = ""; // clear current posts
  posts.slice().reverse().forEach(post => { // newest first
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>${post.datetime}</small>
      <hr>
    `;
    postsDiv.appendChild(div);
  });
}

// Add new post
submitBtn.addEventListener("click", () => {
  const content = postContent.value.trim();
  if(content === "") return alert("Write something first!");

  const now = new Date();
  const datetime = now.toLocaleString();
  const title = `Journal Entry (${datetime})`;

  const newPost = { title, content, datetime };
  posts.push(newPost);

  // Save to localStorage
  localStorage.setItem("journalPosts", JSON.stringify(posts));

  // Display updated posts
  displayPosts();

  // Clear textarea
  postContent.value = "";
});

// Initial display
displayPosts();
