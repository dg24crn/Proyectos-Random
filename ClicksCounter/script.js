let count = 0

const clickButton = document.getElementById('clickButton')
const total = document.getElementById('total')

clickButton.addEventListener('click', (event) => {
    count++
    total.textContent = count
    })

const resetButton = document.getElementById('resetButton')

resetButton.addEventListener('click', (event) => {
    count = 0

    total.textContent = count
})