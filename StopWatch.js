let change
let watch
document.querySelector("#let").addEventListener("click",
    function () {
        clearInterval(change)
        document.querySelector("#start").innerHTML = "PAUSE"
        let mili = 0
        let sec = 0
        let min = 0
        watch = function () {
            if (mili == 99 && sec == 59 && min == 59) {
                clearInterval(change)
            }
            if (mili == 99) {
                mili = 0
                sec = sec + 1
                document.querySelector("h1").innerHTML = `${mili} : ${sec} : ${min}`
            }
            else {
                document.querySelector("h1").innerHTML = `${mili = mili + 1} : ${sec} : ${min}`
            if (sec == 59 && mili == 99) {
                sec = -1
                min = min + 1
               
            }
        }
            
        }
        change = setInterval(watch, 10)
    })
document.querySelector("#start").addEventListener("click", function () {
    if (change != 0) {
        clearInterval(change)
        change = 0
        document.querySelector("#start").innerHTML = "RESUME"
    }
    else {
        change = setInterval(watch, 10)
        document.querySelector("#start").innerHTML = "PAUSE"
    }
})