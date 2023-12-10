let display = document.querySelector(".display")
let calcu = document.querySelector(".calculate")
// let allClear=document.querySelector(".all-clear")

let btnList = document.querySelectorAll(".show-display")
btnList.forEach(item => {
    item.addEventListener("click", function (event) {
        let show = event.target.innerText
        if (display.innerText == 0) {
            display.innerText = show;
           
            
        }
        else if( display.innerText.length<=12) {
            display.innerText += show;
            
        }else{
            return display.innerText
        }
    })

});



function calculator() {
    let result = display.innerText;
     if(result.length>12){display.innerText="e(the number of charactters exceeds the limited)";display.style.fontSize="20px"
    }else{display.innerText = eval(result) }
    
}
calcu.addEventListener("click", calculator)


document.querySelector(".all-clear").addEventListener("click", function () {
   
    return display.innerText = 0
})
function drop() {
    let clear = display.innerText
    if (clear.length == 1) { 
        display.innerText = 0 
    }else{
        display.innerText=clear.slice(0,-1)
    }


}
let clearLast = document.querySelector(".clear-last")
clearLast.addEventListener("click", drop)


