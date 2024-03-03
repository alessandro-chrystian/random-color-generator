const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function() {

    let hexaColor = '#'

    for(let i = 0; i < 6; i++) {
        hexaColor += hexa[getRandomNumbers()] // hexaColor = hexaColor + hex[0] #000000
    }

        // background-color
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = hexaColor
    color.innerHTML = hexaColor
    console.log(hexaColor)
})

function getRandomNumbers () {
    return Math.floor(Math.random() * hexa.length)
}