const xhr = new XMLHttpRequest();
const jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/";
xhr.open("GET", `${jsonPlaceHolderURL}posts`);
xhr.setRequestHeader("Accept", "applications/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "json";
xhr.send();
const postTemplate = document.getElementById("post-template")!;
const postsEl = document.querySelector(".posts")!;
type postT = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
xhr.addEventListener("load", () => {
  const listOfPosts: postT[] = xhr.response;
  listOfPosts.forEach((post: postT) => {
    const postEl: HTMLElement = document.importNode(
      postTemplate.content.firstElementChild,
      true
    );
    console.log(postEl);
    postEl.querySelector("h2")!.innerText = post.title;
    postEl.querySelector("p")!.innerText = post.body;
    postsEl.appendChild(postEl);
  });
});
