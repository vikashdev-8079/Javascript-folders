
const moviveDetail = document.querySelector("#movie-details");
const params = new URLSearchParams(location.search)
const imdbID = params.get("id");

if(imdbID){
    searchMovie(imdbID.trim())
}



async function searchMovie(imdbID) {
 
  let response = await fetch(
    `https://www.omdbapi.com/?apikey=32f454b8&i=${imdbID}&plot=full`
  );
  let data = await response.json();



  if (data.Response === "True") {
    displayMovie(data);
  } else {
    console.log(data.Error);
  }
}



function displayMovie(data){

   moviveDetail.innerHTML  =  `<div class="md:col-span-1   " >

              
            <img src=${data.Poster} alt="" class=" w-full h-full object-cover rounded-xl shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] transition-transform duration-200 hover:scale-98 mt-2 ">
            
        </div>
        
        <div class="md:col-span-2  ">
            <h2 class="text-4xl first-letter:">${data.Title}</h2>
            <section class="mt-6 ">
                <p class="inline rounded-sm text-sm text-[#AEB4BE] bg-slate-300/10 p-2 shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)]">${data.Released}</p>
                <p class="inline ml-4 rounded-sm text-sm text-[#AEB4BE]  bg-slate-300/10 p-2 shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)]">${data.Rated} </p>
                <p class="inline ml-4 rounded-sm text-sm text-[#AEB4BE] bg-slate-300/10 p-2 shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)]"><i class="fa-sharp fa-regular fa-alarm-clock"></i>${data.Runtime}</p>
                <p class="inline ml-4 rounded-sm text-sm text-[#AEB4BE] bg-slate-300/10 p-2 shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)]">${data.Genre}</p>
                <p class="p-5 bg-slate-300/10 mt-6 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] text-sm text-[#AEB4BE]"><i class="fa-regular fa-star text-yellow-300 pr-5 text-xl"></i>${data.imdbRating}/10</p>
            </section>
            <div class="max-h-50  rounded-md p-4 mt-6  bg-slate-300/10  shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] ">
                <p class="text-red-500 uppercase border-l-3 border-pink-600 pl-2">Plot Overview</p>
                <p class="text-sm text-[#AEB4BE]">${data.Plot}</p>
            </div>

            <div class="flex justify-between  mt-5 gap-2" >
                <section class="flex-1 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] p-2">
                    <p class="uppercase text-red-500 text-md">Director</p>
                    <p class="text-sm text-[#AEB4BE]">${data.Director}</p>
                </section>
                <section class="flex-1 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] p-2" >
                    <p class="uppercase text-red-500 text-md">Writer</p>
                    <p class="text-sm text-[#AEB4BE]">${data.Writer}</p>
                </section>
            </div>

             <div class="mt-5 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] p-2 ">
                  <p class="uppercase text-red-500">Actors</p>
                    <p class="text-sm text-[#AEB4BE]">${data.Actors}</p>
             </div>
             
             
            <div class="flex mt-5 justify-between gap-2">
                <section class="flex-1 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] p-2">
                    <p class="uppercase text-red-500">Language</p>
                    <p class="text-sm text-[#AEB4BE]">${data.Language}</p>
                </section>
                <section class="flex-1 rounded-md   shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)] p-2">
                    <p class="uppercase text-red-500">Country</p>
                    <p class="text-sm text-[#AEB4BE]">${data.Country}</p>
                </section>
            </div>
              <button class=" text-sm text-[#AEB4BE] p-2 mt-3 rounded-sm hover:bg-indigo-500 hover:text-white shadow-[2px_2px_5px_1px_rgba(204,204,204,0.4)]" >
            <a href=https://www.imdb.com/title/${data.imdbID} target="_blank">View on IMDb</a> 
             </button>

          

        </div>`
}

