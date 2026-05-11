const searchBtn = document.getElementById("searchBtn");
const movies = document.getElementById("movies");
const notFound = document.getElementById("notFound");

searchBtn.addEventListener("click", async function () {
  const inputBox = document.getElementById("inputBox").value.trim();
  if (!inputBox) {
    alert("Please search favourite movies");
    return;
  } else {
    movies.innerText = "Searching ...";
  }
  movies.innerText = "";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=eb0f9d26&t=${inputBox}`,
    );
    const data = await response.json();
    if (data.Response==="False") {
      movies.innerText = "Not found";
    } else {
        const card=document.createElement("div")
        card.classList.add("movie-card")
        card.innerHTML=`
        <img src="${data.Poster}">
        <p>${data.Title}</p>
        <p>${data.Released}</p>
        <h3>${data.Genre}</h3>
        `;
        movies.appendChild(card)
    }
  } catch (error) {
    notFound.innerText = "Something Went Error";
  }
});
