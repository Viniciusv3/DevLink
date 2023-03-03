function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle('light')
  
  //troca de imagens de light para o darkmode
  // pegar a tag img
  const img = document.querySelector("#profile img");
  //substituir a imagem
  if(html.classList.contains('light')){
    //se estiver em light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      "alt",
      "Photo of Vinicius Venancio with background of two palm trees and a blue sky."
    )
  }else{
    //se estiver em dark mode, adicionar imagem dark
    img.setAttribute('src', './assets/avatar-dark.png')
    img.setAttribute(
      "alt",
      "Photo of Vinicius Venancio with a symbol of peace in front of his face with a peace sign made with his hand on his face."
    )
  }
}