import './style.css'

const usersDiv = document.querySelector('#users');
const postsDiv = document.querySelector('#posts-div')
const homeButton = document.querySelector("#back-to-start")
async function fetchHelper(url) {
  const response = await fetch(url)
  console.log(response)
  if (!response.ok) {
    throw new Error(`${response.status}-${response.statusText}`)
  }
  return response.json();
}

async function showUsers() {
  try {
    const users = await fetchHelper('https://jsonplaceholder.typicode.com/users');
    //const users = await fetchHelper("usersJson.json")
    const usersUl = document.createElement('ul')
    usersUl.className = "main-ul"
    usersUl.id = "main-users-ul"
    users.forEach(b => {
      const newUser = document.createElement("li")
      newUser.className = "user-li";
      const userInfo = {
        Name: b.name,
        Website: b.website,
        CompanyName: b.company.name,
        CatchPhrase: b.company.catchPhrase,
        CompanyBs: b.company.bs
      }
      newUser.innerHTML = `<ul>${createList(userInfo)}</ul>`
      newUser.addEventListener('click', getPosts.bind(this, b.id))
      usersUl.appendChild(newUser);
    });
    usersDiv.appendChild(usersUl)
  }
  catch (e) {
    const p = document.createElement("p")
    p.innerText = `sorry a Error was occurred-${e.message}- please try again later`
    p.style.color = "red"
    p.style.marginTop = "80px"
    usersDiv.appendChild(p)
  }
}
let postsUl
let postError
async function getPosts(id) {
  try {
    const posts = await fetchHelper(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // const posts = await fetchHelper("postsJson.json")
    postsUl = document.createElement("ul")
    postsUl.className = "main-ul"
    postsUl.id = "main-post-ul"
    posts.forEach(post => {
      const newPost = document.createElement("li")
      newPost.className = "post-li"
      newPost.innerHTML = `<h3>Title:${post.title} </h3>${post.body} <button>Show Comments</button>`
      const commentsDiv = document.createElement("div")
      commentsDiv.id = "Comments-div"
      newPost.appendChild(commentsDiv)
      const commentsButton = newPost.querySelector("button")
      commentsButton.addEventListener("click", showComments.bind(this, post.id, newPost, commentsDiv, commentsButton));

      postsUl.appendChild(newPost);

    })
    postsDiv.appendChild(postsUl);
    postsDiv.style.display = "block"
  }
  catch (e) {
    postError = document.createElement("p")
    postError.innerText = `sorry a Error was occurred-${e.message}- please try again later`
    postError.style.marginTop = "80px"
    postError.style.color = "red"
    postsDiv.appendChild(postError)
  }
  finally {
    usersDiv.style.display = "none"
    postsDiv.style.display = "block"
  }
}

async function showComments(postId, post, commentsDiv, button) {
  if (button.innerText === "Show Comments") {
    commentsDiv.innerHTML = `<h3>Comments</h3>`
    try {
      //const comments = await fetchHelper(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      const comments = await fetchHelper(`commentsJson.json`)
      const commentsUl = document.createElement("ul")
      commentsUl.id = "main-comment-ul"
      comments.forEach(comment => {
        const newComment = document.createElement("li")
        const commentList = {
          Name: comment.name,
          Email: comment.email,
          Comment: comment.body
        }
        newComment.innerHTML = `<ul class="comment-ul">${createList(commentList)}</ul>`
        commentsUl.appendChild(newComment);
      })
      commentsDiv.appendChild(commentsUl);
    }
    catch (e) {
      const p = document.createElement("p");
      p.innerText = `sorry an error was occurred-${e.message}- please try again later`
      p.style.backgroundColor = "red"
      p.style.margin = "0"
      p.style.padding = "10px"
      commentsDiv.appendChild(p);
    }
    finally {
      button.innerText = `Hide Comments`
      post.style.backgroundColor = " rgba(177, 243, 222, 1)"
      post.style.color = "black"
      button.style.backgroundColor = "black"
      button.style.color = "white"
    }
  }
  else {
    button.innerText = "Show Comments"
    commentsDiv.innerHTML = "";
    post.style.backgroundColor = "";
    post.style.color = ""
    button.style.backgroundColor = ""
    button.style.color = "black"
  }
}
function createList(obj) {
  console.log(obj)
  let newList = ""
  for (const [key, value] of Object.entries(obj)) {
    newList += `<li><span>${key}: </span>${value}</li>`
    console.log(key, value)
  }
  return newList
}
homeButton.addEventListener('click', () => {
  postsDiv.style.display = "none"
  postsUl?.remove();
  postError?.remove();
  usersDiv.style.display = "block"
});
showUsers()


