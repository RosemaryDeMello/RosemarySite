var elementosSobre = document.querySelectorAll('.menuMobile')

elementosSobre.forEach(function (menuMobile) {
    menuMobile.addEventListener('click', function(){
        menuMobile.classList.toggle('ativa')
    })
})
var elementosSobre = document.querySelectorAll('.sobreA')

elementosSobre.forEach(function (sobreA) {
    sobreA.addEventListener('click', function(){
        sobreA.classList.toggle('ativa')
    })
})
