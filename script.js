
function Modais (idmod) {
    const mod = document.getElementById(idmod)
    mod.classList.add('mostrar')
    mod.addEventListener('click',(e) => {
        if(e.target.id === idmod) {
            mod.classList.remove('mostrar')
        }
    })
}

const art_1 = document.querySelector('#art-1')
art_1.addEventListener('click', () => {
    Modais('modal-art1')
})

const art_2 = document.querySelector('#art-2')
art_2.addEventListener('click', () => {
    Modais('modal-art2')
})

const art_3 = document.querySelector('#art-3')
art_3.addEventListener('click', () => {
    Modais('modal-art3')
})
