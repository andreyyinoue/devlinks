function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // if (html.classList.contains("light")){
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }
    let img = document.getElementById('imagem')
    if (html.classList.contains('light')){
        img.setAttribute('src', 'imagens/profile02.jpeg')
    } else {
        img.setAttribute('src', 'imagens/profile01.jpeg')
    }
}
