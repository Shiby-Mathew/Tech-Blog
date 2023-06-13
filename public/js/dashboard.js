const dashboardFormHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#blog-title").value.trim();
  const blogPost = document.querySelector("#blog-post").value.trim();
  console.log(blogTitle, blogPost);
  const user_id = 1;

  if (blogTitle && blogPost && user_id) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ blogTitle, blogPost, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("post added");
    } else {
      alert("Failed to added new post.");
    }
  }
};
const deleteButtonHandler = async (event) => {
  alert("clicked");
  if (event.target.hasAttribute("name")) {
    const value = event.target.getAttribute("name");
    alert(value);
  }
  
  
  // if (event.target.hasAttribute("data-id")) {
  //   const id = event.target.getAttribute("data-id");
  //   const value = event.target.getAttribute("name");
  //   alert(id, value);
  // }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", dashboardFormHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", deleteButtonHandler);
