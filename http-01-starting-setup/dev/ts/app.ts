const postTemplate = document.getElementById("post-template")!;
const postsEl = document.querySelector("ul.posts")!;
const fetchPostsBtn = document.querySelector("#available-posts button")!;
type postT = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

const formEl = document.querySelector("#new-post form")! as HTMLFormElement;

/**
 * Sending request .
 * @param method
 * @param url
 * @param data
 */
function sendRequest(method: string, url: string, data?: postT) {
  // const promise = new Promise((resolve, reject) => {
  const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/";
  const fullUrl: string = jsonPlaceHolderURL + url;
  const params: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  console.log(data);
  if (data) {
    const fd = new FormData(formEl);
    params.body = fd; //JSON.stringify(data);
    params.headers = { "Content-Type": "multipart-form-data" };
  }
  return fetch(fullUrl, params).then((response) => response.json());
  /*const xhr = new XMLHttpRequest();
    xhr.open(method, fullUrl);
    xhr.setRequestHeader("Accept", "applications/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.onload = function () {
      const statusCode: number = xhr.status;
      if (statusCode && statusCode >= 200 && statusCode < 400) {
        resolve(xhr.response as postT[]);
      } else {
        reject(xhr.response);
      }
    };
    xhr.send(JSON.stringify(data));
  });

  return promise;*/
}

// ~~~~~~~~~ Get available posts ~~~~~~~~~ //
/**
 * Render fetched posts.
 * @param posts
 */
function renderFetchedPosts(posts: postT[]) {
  if (!!!posts.length) {
    return;
  }
  posts.forEach((post: postT) => {
    const postEl: HTMLElement = document.importNode(
      postTemplate.content.firstElementChild,
      true
    );
    postEl.querySelector("h2")!.innerText = post.title;
    postEl.querySelector("p")!.innerText = post.body;
    postEl.id = post.id ? post.id.toString() : Math.random().toString();
    postsEl.appendChild(postEl);
  });
}

fetchPostsBtn.addEventListener("click", () => {
  sendRequest("GET", "posts")
    .then((posts: postT[]) =>
      renderFetchedPosts.apply(null, [posts as postT[]])
    )
    .catch((error) => console.error(error));
});

// ~~~~~~~~~~~~ Store new post ~~~~~~~~~~~~ //
async function createPost(post: postT) {
  const userId = Math.floor(Math.random() * 100);
  post.userId = userId;
  sendRequest("POST", "posts", post)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = (formEl.querySelector("#title")! as HTMLInputElement).value;
  const body = (formEl.querySelector("#content")! as HTMLInputElement).value;
  const post: postT = {
    title,
    body,
    userId: 0,
  };
  createPost(post);
});

// ~~~~~~~~~~~~~~ Delete post ~~~~~~~~~~~~~ //
postsEl.addEventListener("click", async (event) => {
  const eventTarget = event.target as HTMLButtonElement;
  if (eventTarget?.nodeName === "BUTTON") {
    const parentLiEl = eventTarget?.parentElement;
    sendRequest("DELETE", `posts/${parentLiEl?.id}`)
      .then(() => console.info(`${parentLiEl?.nodeName} deleted`))
      .catch((error) => console.error(error));
  }
});
