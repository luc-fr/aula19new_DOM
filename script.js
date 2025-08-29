var contador = document.getElementById("count")

var decrementar = document.getElementById("decrement")
var resetar = document.getElementById("reset")
var incrementar = document.getElementById("increment")

var number = 0

contador.innerText = number

decrementar.addEventListener("click", function(){
    number--
    color()

    // contador.innerText = number
    // if(number < 0){
    //     contador.style.color = "#f00"
    // } else if(number === 0){
    //     contador.style.color = "#f5f5f5"
    // }


    // document.body.style.backgroundColor = "red"
})

resetar.addEventListener("click", function(){
    number = 0
    color()

    // contador.innerText = number
    // contador.style.color = "#f5f5f5"


    // document.body.style.backgroundColor = "white"
})

incrementar.addEventListener("click", function(){
    number++
    color()

    // contador.innerText = number
    // if(number > 0){
    //     contador.style.color = "#0f0"
    // } else if(number === 0){
    //     contador.style.color = "#f5f5f5"
    // }


    // document.body.style.backgroundColor = "green"
})


function color(){

    contador.innerText = number

    if(number > 0){
        contador.style.color = "#0F0"
        return
    } else if(number < 0){
        contador.style.color = "#F00"
        return
    }
    contador.style.color = "#F5F5F5"
}