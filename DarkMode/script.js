function switchDark() {
    const getBody = document.querySelector('body')
    const getText = document.getElementById('mainText')
    
    getText.innerText = "Dark Mode"
    getBody.appendChild(getText)

    getBody.classList.remove('lightTheme')
    getBody.classList.add('darkTheme')

    return getBody
}

function switchLight() {
    const getBody = document.querySelector('body')
    const getText = document.getElementById('mainText')
    
    getText.innerText = "Light Mode"
    getBody.appendChild(getText)

    getBody.classList.remove('darkTheme')
    getBody.classList.add('lightTheme')

    return getBody
}

const darkButton = document.getElementById('darkButton')

darkButton.addEventListener('click', switchDark)

const lightButton = document.getElementById('lightButton')

lightButton.addEventListener('click', switchLight)