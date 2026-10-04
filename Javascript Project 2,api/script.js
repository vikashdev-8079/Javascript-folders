const movieForm = document.querySelector("#serachMovie");
const moviveInput = document.querySelector("#movieInput");
const moviveHub = document.querySelector("#movieHub");
const hemburger = document.querySelector("#hemburger");
const options = document.querySelector("#options");


// submit adEventListner
movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let query = moviveInput.value.trim();
  if (!query) {
    return;
  }

  searchMovies(query);
});




//API lana
async function searchMovies(movieName) {
  moviveHub.innerHTML = `<div class="loader"> </div> `;
  
  
  let response = await fetch(
    `https://www.omdbapi.com/?apikey=32f454b8&s=${encodeURIComponent(movieName)}`,
  );
  let data = await response.json();
  
  console.log(data);

  if (data.Response === "True") {
    displayMovies(data.Search);
  } else {
    moviveHub.innerHTML = `<p>${data.Error}</p>`;
  }
}



// Data Display in front page
function displayMovies(movies) {
  moviveHub.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.dataset.imdbID = movie.imdbID
    div.className =" movie-Card"

   
    div.innerHTML = ` 
            <div>
                <img src=${movie.Poster} alt="" class=" rounded-sm index transition-transform duration-200 hover:scale-98 w-full h-full object-contain z-0">
            </div>
        `;

    moviveHub.append(div);
  });
}




moviveHub.addEventListener("click",(e)=>{
    e.stopPropagation();

   const movieCard = e.target.closest(".movie-Card")

   const imdbID = movieCard.dataset.imdbID

   //BOM
   location.href = `movie-details.html?id=${imdbID}`
})



let data = [
    {
        "Title": "Crazy, Stupid, Love.",
        "Year": "2011",
        "imdbID": "tt1570728",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Crazy Rich Asians",
        "Year": "2018",
        "imdbID": "tt3104988",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Crazy Heart",
        "Year": "2010",
        "imdbID": "tt1263670",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NDc5NjgzNl5BMl5BanBnXkFtZTcwNzc0NDIzMw@@._V1_QL75_UY562_CR1,0,380,562_.jpg"
    },
    {
        "Title": "Like Crazy",
        "Year": "2012",
        "imdbID": "tt1758692",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzOTgyOTU4OF5BMl5BanBnXkFtZTcwNDYxMjcxNg@@._V1_QL75_UX380_CR0,16,380,562_.jpg"
    },
    {
        "Title": "The Gods Must Be Crazy",
        "Year": "1980",
        "imdbID": "tt0080801",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDUzNmJjOTEtMmNhZi00YTY1LTg0MTQtOTkwNjFkNjZjMDU5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "C.R.A.Z.Y.",
        "Year": "2005",
        "imdbID": "tt0401085",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzVmM2I5Y2EtZTRmMS00YmVhLTk1ZmItNWJmNjIyYmJkZjgxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Stir Crazy",
        "Year": "1980",
        "imdbID": "tt0081562",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTI2Yzg0ZDYtYmE3YS00NjAzLWEwZjMtMmY5YmJmNzI2MzQ3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Eight Crazy Nights",
        "Year": "2002",
        "imdbID": "tt0271263",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk1NTU4NjE5OV5BMl5BanBnXkFtZTYwMTQ3OTY2._V1_SX300.jpg"
    },
    {
        "Title": "Crazy/Beautiful",
        "Year": "2001",
        "imdbID": "tt0250224",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTQyN2IyMTEtMTQ4YS00ODEzLWFjNTgtMTdiYTU4YmE0M2RmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Crazy Ex-Girlfriend",
        "Year": "2015–2019",
        "imdbID": "tt4094300",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjVjM2Y3YzctYzQwMi00OTY2LWEyMjMtODdkZmZiMWQxM2M4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    }
]


displayMovies(data)

hemburger.addEventListener("click",(e)=>{
  e.stopPropagation()
options.classList.toggle("hidden")


})