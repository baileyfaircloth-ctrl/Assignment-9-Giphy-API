console.log("script.js loaded");
fetch("https://api.giphy.com/v1/gifs/search?...").then().catch();
const response = await fetch(url);
const data = await response.json();
// Step 7: Fetch Giphy API data
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=cats&limit=10";

async function getGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = data.data.map(gif => gif.images.original.url);
  console.log("GIF URLs:", images);
  return images;
}

getGifs(); // test it once

// Step 8: Display GIFs on the page
const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");

fetchButton.addEventListener("click", async () => {
  const gifs = await getGifs();
  gifContainer.innerHTML = ""; // Clear old gifs
  for (let i = 0; i < gifs.length; i++) {
    gifContainer.innerHTML += `<img src="${gifs[i]}" class="col-3 mb-3">`;
  }
});

const searchInput = document.querySelector("#search-input");

fetchButton.addEventListener("click", async () => {
  const query = searchInput.value || "cats"; // Default search
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${query}&limit=10`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const gifs = data.data.map(gif => gif.images.original.url);

  gifContainer.innerHTML = "";
  gifs.forEach(url => {
    gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
  });
});
