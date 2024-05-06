window.addEventListener("scroll", function () {
    let botao = document.querySelector("#botaoQueLevaPraCima");
    botao.classList.toggle("active", window.scrollY > 100);
});

