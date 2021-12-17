
const time = document.querySelector(".timer__time")
const startBtn = document.querySelector(".timer__btn_start")
const pauseBtn = document.querySelector(".timer__btn_pause")
const stopBtn = document.querySelector(".timer__btn_stop")

let isStarted = true

let hh = 0
let mm = 0
let ss = 0

let startTimer = null

startBtn.addEventListener('click',()=> {

    if (isStarted) {
        startTimer = setInterval(() => {

            time.innerText = `${zeroAdder(hh)}:${zeroAdder(mm)}:${zeroAdder(ss)}`
            ss++
            if (ss === 59) {
                mm++
                ss = 0
            }
            if (mm === 59) {
                hh++
                mm = 0
            }
            if (hh === 23 && mm === 59 && ss === 59) {
                hh = 0
            }
        }, 1000)
    }
    isStarted = false
})
pauseBtn.addEventListener('click', ()=> {
    clearInterval(startTimer)
})
stopBtn.addEventListener('click', ()=> {
    clearInterval(startTimer)
    hh = 0
    mm = 0
    ss = 0
    time.innerText = '00:00:00'
})

const zeroAdder = (num) => {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}
