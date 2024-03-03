// const btn = document.getElementById('btn')
// const color = document.querySelector('.span-color')

// btn.addEventListener('click', function() {
//     let randomColor = `rgb(${randomRgbNumber()}, ${randomRgbNumber()}, ${randomRgbNumber()})`
//     let mainColor = document.querySelector('#main-color')
//     mainColor.style.backgroundColor = randomColor
//     color.innerHTML = randomColor
//     console.log(randomColor)
// })

// function randomRgbNumber() {
//     return Math.floor(Math.random() * 256)
// }

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){

    let randomRgbColor = `rgb(${getRgbColor()})`
    let mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = randomRgbColor
    color.innerHTML = randomRgbColor
    console.log(randomRgbColor)
})

function getRgbColor() {

    let rgbColors = []

    for(let i = 0; i < 3; i++) {

        rgbColors.push(Math.floor(Math.random() * 256))

    }

    return rgbColors
}