const theme = () => {
    const currentTheme = localStorage.getItem('theme') ?? 'light'
    const switchBtn = document.querySelector('.theme-switch')
    const body = document.querySelector('body')

    body.classList.add(`theme-${currentTheme}`)
    switchBtn.classList.add(`theme-switch_${currentTheme}`) 
    
    const toggle = () => {
        const theme = body.classList.contains('theme-dark') ? 'light' : 'dark'

        body.classList.remove('theme-dark', 'theme-light')
        switchBtn.classList.remove('theme-switch_dark', 'theme-switch_light')

        body.classList.add(`theme-${theme}`)
        switchBtn.classList.add(`theme-switch_${theme}`) 

        localStorage.setItem('theme', theme)
    }
   
    switchBtn.addEventListener('click', toggle)
}

theme()