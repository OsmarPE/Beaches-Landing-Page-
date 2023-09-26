const video = document.querySelector<HTMLVideoElement>('video')
const btnPlay = document.querySelector<HTMLButtonElement>('.video__play')
const btnMode = document.querySelector<HTMLButtonElement>('#btnMode')
const inputCheck = document.querySelector<HTMLInputElement>('input[type="checkbox"]')
const buttonsMenu = document.querySelectorAll<HTMLButtonElement>('.btnMenu')
const nav = document.querySelector<HTMLElement>('.main-nav')
const btnToTop = document.querySelector<HTMLButtonElement>('.btn-top')


type ModesType = 'soon' | 'dark'
let mode:ModesType = localStorage.getItem('mode') as ModesType ?? 'soon'
mode === "dark" && document.body.classList.add(mode)



btnPlay?.addEventListener('click', e => {
    e.preventDefault()
    if (video?.paused) {
        video.play()
        btnPlay.firstElementChild?.classList.replace('ri-play-fill','ri-pause-line')
        return
    }
    
    video?.pause()
    btnPlay.firstElementChild?.classList.replace('ri-pause-line','ri-play-fill')
    
})

btnMode?.addEventListener('click', () => {
    storageMode(mode)
    


})






function storageMode(modeText:ModesType) {
    if (modeText === "soon") {
        document.body.classList.add('dark')
        btnMode?.lastElementChild?.classList.replace('ri-sun-line','ri-moon-line')
        mode = "dark"
    }
    
    else{
        document.body.classList.remove('dark')
        btnMode?.lastElementChild?.classList.replace('ri-moon-line','ri-sun-line')
        mode = "soon"
    }
    localStorage.setItem('mode',mode)

}

buttonsMenu.forEach( btn => btn.addEventListener('click', (e) => {
    e.preventDefault()
    nav?.classList.toggle('active')
}))


window.addEventListener('scroll', e => {
    if (window.scrollY >= 700) {
        console.log('mas de 1000');
        btnToTop?.classList.add('active')
        return
    }

    btnToTop?.classList.remove('active')
    
})

btnToTop?.addEventListener('click', () => {
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
})