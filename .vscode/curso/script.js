function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/assets/perfilnormal.png")
    img.setAttribute(
      "Alt",
      "Uma foto de Janderson, no periodo da noite, usando blusa de frio."
    )
  } else {
    img.setAttribute("src", "/assets/assets/perfilblack.png")
    img.setAttribute(
      "Alt",
      "Uma foto com efeito preto e branco de Janderson, no periodo da noite, usando blusa de frio."
    )
  }

  /*  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
}
