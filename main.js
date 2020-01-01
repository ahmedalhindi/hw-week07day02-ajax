memeURL = "https://api.imgflip.com/get_memes"

function render(arr) {
    let out = arr.map( (el) => {
        return `<img src = "${el.url}" width = 400px/>`} )
        out = out.map(e=> `<li>${e}</li>`)
    return out
}

axios.get(memeURL)
.then(function (resp) {
    // handle success
let memes = resp.data;
memes = memes.data.memes
console.log(memes)
let div = document.getElementById("main");
console.log(render(memes))
div.innerHTML += render(memes)
})
.catch(function (error) {
    // handle error
    console.log(error)
error
})