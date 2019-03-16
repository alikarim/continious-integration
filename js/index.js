import {clock, timerBtn} from './dom'
import '../css/style.css'

clock.innerHTML = new Date()

var interval = undefined

const startTimer= ()=> {
    interval = setInterval(()=>{
        let today = new Date();
        let milliseconds = today.getMilliseconds();
        clock.innerHTML = `${today} : ${milliseconds}`
    }, 100)
    timerBtn.innerHTML = 'Stop'
}

timerBtn.addEventListener("click", function(){
    interval === undefined ? startTimer() : (
        console.log('clearing time interval..'),
        clearInterval(interval),
        interval = undefined,
        timerBtn.innerHTML = 'Start'
    )
});


