"use strict";
const postTemplate = document.getElementById("post-template");
const postsEl = document.querySelector("ul.posts");
const fetchPostsBtn = document.querySelector("#available-posts button");
const formEl = document.querySelector("#new-post form");
function sendRequest(method, url, data) {
    const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/";
    const fullUrl = jsonPlaceHolderURL + url;
    const params = {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    console.log(data);
    if (data) {
        const fd = new FormData(formEl);
        params.body = fd;
        params.headers = { "Content-Type": "multipart-form-data" };
    }
    return fetch(fullUrl, params).then((response) => response.json());
}
function renderFetchedPosts(posts) {
    if (!!!posts.length) {
        return;
    }
    posts.forEach((post) => {
        const postEl = document.importNode(postTemplate.content.firstElementChild, true);
        postEl.querySelector("h2").innerText = post.title;
        postEl.querySelector("p").innerText = post.body;
        postEl.id = post.id ? post.id.toString() : Math.random().toString();
        postsEl.appendChild(postEl);
    });
}
fetchPostsBtn.addEventListener("click", () => {
    sendRequest("GET", "posts")
        .then((posts) => renderFetchedPosts.apply(null, [posts]))
        .catch((error) => console.error(error));
});
async function createPost(post) {
    const userId = Math.floor(Math.random() * 100);
    post.userId = userId;
    sendRequest("POST", "posts", post)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = formEl.querySelector("#title").value;
    const body = formEl.querySelector("#content").value;
    const post = {
        title,
        body,
        userId: 0,
    };
    createPost(post);
});
postsEl.addEventListener("click", async (event) => {
    const eventTarget = event.target;
    if (eventTarget?.nodeName === "BUTTON") {
        const parentLiEl = eventTarget?.parentElement;
        sendRequest("DELETE", `posts/${parentLiEl?.id}`)
            .then(() => console.info(`${parentLiEl?.nodeName} deleted`))
            .catch((error) => console.error(error));
    }
});
