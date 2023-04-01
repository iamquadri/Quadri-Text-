const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I am Quadri Osein a FrontEnd Developer my skills are HTML,CSS,JavaScript,Bootstrap and React.🧑‍💻💻'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }
        
    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)