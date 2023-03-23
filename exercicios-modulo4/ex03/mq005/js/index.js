function mudouTamanho() {
    if(window.innerWidth >= 768) {
        document.menulist.style.display = 'block'
    } else {
        document.menulist.style.display = 'none'
    }
}

function clickMenu() {
    if(menulist.style.display == 'block') {
        menulist.style.display = 'none'
    } else {
        menulist.style.display ='block'
    }
}