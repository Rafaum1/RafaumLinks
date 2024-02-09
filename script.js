function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light') //tudo ABAIXO simplificado

// if(html.classList.contains('light')) {
//   html.classList.remove('light')
// } else {
//   html.classList.add('light')
// }



//pegar a tag img
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')) {
  img.setAttribute('src', './assets/avatar-light.png')
} else{
  //se tiver sem light mode, manter imagem normal
  img.setAttribute('src', './assets/avatar-black.png')
}

}