async function getuser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json()
    return data;
}

getuser()


document.querySelector("#githubform").addEventListener("submit", async (e)=>{
e.preventDefault()

let username = document.querySelector("#githubusername").value

const data = await getuser(username)

document.querySelector("#show").innerHTML = ` <img src=${data.avatar_url} alt="">
        <h2>${data.name}</h2>
        <i>username:${data.login}</i>
        <p>bio:${data.bio}</p>
        <p>followers :${data.followers}</p>
        <p>following :${data.following}</p>
        <p>Public repos :${data.public_repos}</p>`

})

//Navigator
// function updatStatus(){
//     document.querySelector("#live").textContent = navigator.onLine ? "online" : "offline"
// }

// window.addEventListener("online" ,updatStatus)
// window.addEventListener("offline" ,updatStatus)