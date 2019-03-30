
export const fetchPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json);

export const fetchPost = ID =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
    .then(response => response.json())
    .then(json => json);
