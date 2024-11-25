// Initialize an empty array for storing posts
let posts = [];

// Function to add a new post
function addPost() {
  const postContent = document.getElementById("post-content").value.trim();

  if (postContent) {
    const newPost = {
      content: postContent,
      likes: 0,
      id: Date.now()
    };

    posts.unshift(newPost);  // Add to the beginning of the array
    document.getElementById("post-content").value = "";  // Clear the textarea

    displayPosts();  // Refresh the feed
  }
}

// Function to display posts in the feed
function displayPosts() {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";  // Clear current posts

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
      <div class="post-content">${post.content}</div>
      <div class="post-actions">
        <span class="like-btn ${post.likes > 0 ? "liked" : ""}" onclick="toggleLike(${post.id})">
          Like (${post.likes})
        </span>
      </div>
    `;

    feedContainer.appendChild(postElement);
  });
}

// Function to toggle like on a post
function toggleLike(postId) {
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    post.likes += post.likes === 0 ? 1 : -1;  // Increment or decrement likes
    displayPosts();  // Refresh the feed
  }
}

// Display posts initially if any
displayPosts();
