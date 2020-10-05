"use strict";
const xhr = new XMLHttpRequest();
const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/";
xhr.open("GET", `${jsonPlaceHolderURL}posts`);
xhr.setRequestHeader("Accept", "applications/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "json";
xhr.send();
const postTemplate = document.getElementById("post-template");
const postsEl = document.querySelector(".posts");
xhr.addEventListener("load", () => {
    const listOfPosts = xhr.response;
    listOfPosts.forEach((post) => {
        const postEl = document.importNode(postTemplate.content.firstElementChild, true);
        console.log(postEl);
        postEl.querySelector("h2").innerText = post.title;
        postEl.querySelector("p").innerText = post.body;
        postsEl.appendChild(postEl);
    });
});
